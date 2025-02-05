

const RequestHandler = (req, res) => {

    if(req.url === '/'){
        res.write();
        res.end();
    }
    else if(req.url === '/buy-product'){
        
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