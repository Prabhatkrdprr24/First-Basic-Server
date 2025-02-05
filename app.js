//External module
const express = require('express');

const app = express();

//first middleware
app.use("/", (req, res, next) => {
    console.log("Middleware 1", req.url, req.method);
    next(); 
});

//second middleware
app.use("/test", (req, res, next) => {
    console.log("Middleware 2", req.url, req.method);
    res.send("<h1>Hello from express dprr</h1>");
});

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}/`)
});