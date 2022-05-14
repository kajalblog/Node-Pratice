const path = require('path');
const k = path.basename('C:\\temp\\myfile.html');
console.log(k);
const a = path.extname(__filename);
console.log(a);
console.log(__filename, a);

