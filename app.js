const http = require('http');

console.log("I was here");

const requestHandler = (req, res) => {
    console.log("Request received", req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    if(req.url === '/'){
        res.write(`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <title>Node js</title>
                </head>
                <body>
                    <h1>Welcome to first server</h1>
                </body>
            </html>
        `);
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