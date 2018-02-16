var fs = require('fs');

var filename = process.argv[2]

// filename, callback
fs.readFile(filename, function(err, buffer) {
	var lines = buffer.toString().split('\n')
	console.log(lines.length);
});

console.log('where am i?');