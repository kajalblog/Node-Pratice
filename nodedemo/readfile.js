var http = require('http');
var fs = require('fs');
http.createServer((req, res) => {
    fs.readFile('demofile.txt', 'utf8', (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        // console.log(err, data);
        res.write(data)

        return res.end();

    })

}).listen(4000);