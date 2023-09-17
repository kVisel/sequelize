const http = require('http');
const app = require('./app');


const normalizePort = val => {
    const port = parseInt(val, 10);
    if(isNaN(port)) return val;
    if(port >= 0) return port;
    return false;
}

const port = normalizePort(3000);
app.set('port', port);


const server = http.createServer(app);

server.on('error', () => console.log('error du server'));
server.on('listening', () => console.log('linstening on port : ' +port));

server.listen(port);