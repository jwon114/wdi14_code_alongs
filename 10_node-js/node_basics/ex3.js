// write a command line interface program
// that returns line count of file passed in

// $ node ex3.js ex1.js
// 4

// hints: you will need the fs module
// 		  you will need to use the process.argv global
//		  you will need some javascript string function(s)
//		  debugger
//		  node debug ex1.js
//		  repl

var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);

console.log(buffer.toString().split('\n').length);


