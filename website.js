const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(res.url)

    res.setHeader('Content-Type', 'text/html');
    if (res.url == '') {
        res.statusCode = 200;
        res.end('<h1>This is Demo Website</h1> <p> Starting Node js ......</p>');
    }

    else if (res.url == '/about') {
        res.statusCode = 200;
        res.end('<h1>This is About Us page</h1>');
    }
    else if (res.url == '/hello') {
        const a = fs.readFileSync('index.html');
        res.end(a.toString())
    }
    else {
        res.statusCode = 404;
        res.end('<h1>Page Not Found</h1>')
    }



});
server.listen(port, () => {
    console.log(`Server is listing on ${port}`);
})
