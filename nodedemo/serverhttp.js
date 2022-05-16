var http = require('http');
var data = [
    { name: "kajal", age: 25, company: "Green Tiger" },
    { name: "Vrushali", age: 27, company: "Green Tiger" },
    { name: "Sachin", age: 22, company: "Green Tiger" },
    { name: "Narayan", age: 22, company: "Green Tiger" },
    { name: "Ajay", age: 22, company: "Green Tiger" }]
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application\json' })
    res.write(JSON.stringify(data));
    res.end();

}).listen(4000);
