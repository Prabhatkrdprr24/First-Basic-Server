//External module
const express = require('express');
const fs = require('fs');

const app = express();

//first middleware
app.use("/", (req, res, next) => {
    console.log("Request Recieved ", req.url, req.method);
    next(); 
});

app.get("/", (req, res, next) => {
    res.send(`
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
    `)
});

app.post("/buy-product", (req, res, next) => {
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
            res.end();
            console.log("Sending response");
        });
    });
});

app.get("/products", (req, res, next) => {
    res.send(`
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
});

app.use((req, res, next) => {
    res.statusCode = 404;
    res.send(`
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
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}/`)
});