const fs = require('fs');
fs.readFile('fs.txt', 'utf8', (err, data) => {
    console.log(err, data);

})
const a = fs.readFileSync('fs.txt');
console.log(a.toString());
fs.writeFile("file2.txt", "this is second file", () => {
    console.log("data writtten to the file");
});
console.log("fs module");