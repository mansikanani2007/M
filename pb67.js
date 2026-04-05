const fs = require('fs');

// Write file (create if not exists)
fs.writeFileSync('./test.txt', 'Hello Mansi!');

// Read file
const data = fs.readFileSync('./test.txt', 'utf8');

// Print output
console.log(data);
console.log("Done");