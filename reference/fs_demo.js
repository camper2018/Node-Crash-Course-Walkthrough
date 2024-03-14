const fs = require('fs');
const path = require('path');

// Create a folder using asynchronous mkdir
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//    if (err) throw err;
//    console.log('Folder created...');
// });

// Create and write to file 

// overwrites the content if already exists
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', err => {
//     if (err) throw err;
//     console.log('File written to...');
//  });

// file append

// fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I Love Node js', err => {
//     if (err) throw err;
//     console.log('File written to...');
// });

// Read file

// fs.readFile(path.join(__dirname, '/test', 'hello.txt'),'utf8', (err, data) => {
//    if (err) throw err;
//    console.log(data);
// });

//Rename file

// fs.rename(
//     path.join(__dirname, '/test', 'hello.txt'),
//     path.join(__dirname, '/test', 'helloWorld.txt'), 
//     (err) => {
//     if (err) throw err;
//     console.log('File renamed...');
//  });