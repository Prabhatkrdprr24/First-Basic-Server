const fs = require('fs');

const RequestHandler = (req, res) => {
    console.log("Request received", req.url, req.method);
    res.setHeader('Content-Type', 'text/html');
    if(req.url === '/'){
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Myntra</title>
            </head>
            <body>
                <h1>Welcome to first server</h1>
                <form action="/buy-product" method="POST">
                    <input type="text" name="product" placeholder="Enter product name">
                    <br>
                    <input type="text" name="budget" placeholder="Enter your budget">
                    <input type="submit">
                </form>
            </body>
            </html>
        `);
        res.end();
    }
    else if(req.url === '/buy-product'){
        console.log("form data received");

        const buffer = [];
        req.on('data', (chunk) => {
            // console.log(chunk);
            buffer.push(chunk);
        });
        req.on('end', () => {
            const body = Buffer.concat(buffer).toString();
            // console.log(body);
            const urlParams = new URLSearchParams(body);
            const bodyJson = {};
            //[["product", "jeans"], ["price", "1299"]]
            for(const [key, value] of urlParams.entries()){
                bodyJson[key] = value;
            }
            // console.log(bodyJson);
            fs.writeFile('buy.txt', JSON.stringify(bodyJson), (err) => {
                res.statusCode = 302;
                res.setHeader('Location', '/products');
                res.end();
                console.log("Sending response");
            });
        });
    }
    else if(req.url === '/products'){
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <title>products</title>
                </head>
                <body>
                    <h1>Product list will appear here.</h1>
                </body>
            </html>
        `);
        res.end();
    }
    else{
        res.statusCode = 404;
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <title>Page Not Found</title>
                </head>
                <body>
                    <h1>404 Page not found</h1>
                </body>
            </html>
        `);
        res.end();
    }
}

// module.exports = { 
//     handler: RequestHandler,
// };
 //OR
exports.handler = RequestHandler;