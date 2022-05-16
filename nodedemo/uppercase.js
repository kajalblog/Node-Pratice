var http = require('http')
var up = require('upper-case')
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text' })

    res.write(up.upperCase("kajal Parchande"));
    res.end();
}).listen(4000)