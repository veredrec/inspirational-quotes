const http = require('http');

const router = require('./router.js');

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 6000;

const server = http.createServer(router);

server.listen(port);

console.log('server is running on http://' + host + ':' + port);
