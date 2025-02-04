const http = require('http');
const fs = require('fs');

console.log("I was here");

const requestHandler = (req, res) => {
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
    }
    else if(req.url === '/buy-product'){
        console.log("form data received");

        const buffer = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            buffer.push(chunk);
        });
        req.on('end', () => {
            const body = Buffer.concat(buffer).toString();
            console.log(body);
        });

        fs.writeFileSync('buy.txt', "Myntra app");
        res.statusCode = 302;
        res.setHeader('Location', '/products');
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
    }
    res.end();
}

const server = http.createServer(requestHandler);
const PORT = 3001;
server.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}/`)
});