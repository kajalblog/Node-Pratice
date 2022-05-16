var http = require('http');
http.createServer((req, res) => {
    res.write("hello this is first api created by node js");
    res.end()

}).listen(5000)

var other = require('./other');
console.log(other(12, 22))