//core module
const http = require('http');

//Local module
const { handler } = require('./RequestHandler');

function compare(num){
    if(num = 10){
        return "Equal";
    }
    else{
        return "Not Equal";
    }
}

const server = http.createServer(handler);
const PORT = 3001;
server.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}/`)
});