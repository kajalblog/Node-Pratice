const express = require('express');
const app = express();
const router = express.Router();
const currentUrl = (req, res, next) => {
    console.log("current url is", req.originalUrl);
    next();
}
// app.use(currentUrl);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html')
});
app.get('/about', (req, res) => {
    res.send("this is about page");
});
router.get('/login', currentUrl, (req, res) => {
    res.send("this is login page");
});
app.use('/', router);
app.listen(4500);