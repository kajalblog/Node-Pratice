var http = require('http');
var data = `
<h1>Website Using Node Js</h1>
<input type=text><br><br>
<input type=text><br><br>
<input type=text>`


http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(data)
}).listen(4000)