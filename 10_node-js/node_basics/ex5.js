var http = require('http');
var file = require('fs');

function app(request, response) {
	var path = request.url

	if (path === '/') {
		response.write('welcome');
		response.end();
	} else {
		response.write('go back to the home page');
		response.end();
	}
}

var server = http.createServer(app);

server.listen(8080, function() {
	console.log('my first server listening at 8080');
});