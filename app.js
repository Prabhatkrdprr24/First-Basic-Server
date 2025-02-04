//core module
const http = require('http');

//Local module
const { handler } = require('./RequestHandler');

const server = http.createServer(handler);
const PORT = 3001;
server.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}/`)
});