const http = require('http');

console.log("I was here");

const requestHandler = (req, res) => {
    console.log("I was here in requestHandler");
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<html>');
    // res.write('<head><title>First Sample Server</title></head>');
    // res.write('<body>');
    // res.write('<h1>Welcome to the first sample server</h1>');
    // res.write('</body>');
    // res.write('</html>');
    // res.end();

     // OR

    res.setHeader('Content-Type', 'text/html');
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
    res.end();
}

const server = http.createServer(requestHandler);
const PORT = 3001;
server.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}/`)
});