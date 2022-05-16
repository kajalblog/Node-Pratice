var fs = require('fs');
var rs = fs.createReadStream('./demofile.txt');
rs.on('open', function () {
    console.log("this is event file");
})