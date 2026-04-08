const http = require('http');
const fs = require('fs');
const path = require('path');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data);
        });
    }
    else if (req.url === '/run') {
        fs.writeFile('demo.txt', 'Hello File!', (err) => {
            if (err) throw err;
            fs.appendFile('demo.txt', '\nAppended Text', (err) => {
                if (err) throw err;
                fs.readFile('demo.txt', 'utf8', (err, data) => {
                    if (err) throw err;
                    fs.unlink('demo.txt', (err) => {
                        if (err) throw err;
                        res.writeHead(200, {'Content-Type': 'text/plain'});
                        res.end("File Content:\n" + data + "\n\nFile Deleted Successfully");
                    });
                });
            });
        });
    }
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});