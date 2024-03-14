// core module path
const path = require('path');

//Base file name
console.log("__filename:", __filename);// gives absolute path of the file
console.log("file basename:", path.basename(__filename)) // only gives filename
// Directory name
console.log("file dirname:", path.dirname(__filename)); // gives directory path only

// File extension
console.log("file extension:", path.extname(__filename));
// Create path object
console.log(path.parse(__filename));
//Concatenate paths
// ../test/hello.html
console.log(path.join(__dirname, 'test','hello.html'));