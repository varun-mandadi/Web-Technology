const http = require('http');
const fs = require('fs');
const path = require('path');
const EventEmitter = require('events');
const emitter = new EventEmitter();
let message = "";
emitter.on('greet', (name) => {
    message += `Hello ${name}\n`;
});
emitter.on('greet', (name) => {
    message += `Welcome ${name}\n`;
});
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
    else if (req.url === '/event') {
        message = "";
        emitter.emit('greet', 'Varun');

        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(message);
    }
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});