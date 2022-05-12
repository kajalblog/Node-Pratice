const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>This is Kajal</h1> <p> Yes , Now I can do anything ......</p>');

});
server.listen(port, () => {
    console.log(`Server is listing on ${port}`);
})
