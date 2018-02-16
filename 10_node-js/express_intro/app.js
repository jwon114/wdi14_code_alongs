var express = require('express');
var app = express();
var placesController = require('./placesController');
const PORT = 8080;

app.set('views', './views');
app.set('view engine', 'ejs');

// request
// ||
// ||
// \/

// example middleware
// if new request comes in, log to console then pass to next department
function myLogger(req, res, next) {
	console.log('request ' + req.method + ' ' + req.path);
	next(); // passes the request to the next department
}

app.use(myLogger);

// ||
// ||
// \/

// all these things are middleware
app.get('/', function(req, res) {
	// send is for strings
	res.send('hello express'); 
});

// ||
// \/

app.get('/about', function(req, res) {
	// render is for templates
	res.render('about');
});

// ||
// \/

app.get('/api/places', placesController.index);

app.listen(PORT, function() {
	console.log(`listening on port ${PORT}`);
});
