//core module
const http = require('http');

//External module
const express = require('express');

const app = express();

//first middleware
app.use((req, res, next) => {
    console.log("Middleware 1", req.url, req.method);
    next(); 
});

//second middleware
app.use((req, res, next) => {
    console.log("Middleware 2", req.url, req.method);
    res.send("<h1>Hello from express</h1>");
});

const server = http.createServer(app);
const PORT = 3001;
server.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}/`)
});