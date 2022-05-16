const express = require('express');
const server = express();
server.get('/', (req, res) => {
    res.send('express server');
}).listen(4500);