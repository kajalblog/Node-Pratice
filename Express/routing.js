const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send("home page")
});
app.get('/about', (req, res) => {
    res.send("about page")
});
app.get('/login', (req, res) => {
    res.send("login page")
});
app.post('/login', (req, res) => {
    res.send(" Post method of login page")
});
app.put('/login', (req, res) => {
    res.send("put method")
});
app.listen(4500);