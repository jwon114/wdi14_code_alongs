var _ = require('lodash');

var fruits = ['apple', 'orange', 'banana', 'apple'];

console.log(_.sample(fruits));
console.log(_.uniq(fruits));

var request = require('request');

request('http://omdbapi.com/?apikey=2f6435d9&t=jaws', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  console.log('title', JSON.parse(body).Title);
  console.log('title', JSON.parse(body).Year);
});