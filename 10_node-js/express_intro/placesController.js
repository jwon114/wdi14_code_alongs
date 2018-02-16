function index(req, res) {
	var places = [
		{ name: 'ga' }, 
		{ name: 'home' }
	]
	
	// res.send(JSON.stringify(places)) // manually
	res.json(places) // feature from express
}

module.exports = {
	index
}