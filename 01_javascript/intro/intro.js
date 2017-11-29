console.log('hello byteme');

var wdi14Rules = true;

if (wdi14Rules) {
	console.log('yes its true');
}

// truthy and falsey

var firstname = ''; // empty string is falsey

if (firstname !== '') {
	console.log(firstname);
}

var points = 0; // zero is falsey

if (points) {
	console.log('you have ' + points);
}

var lastname; // undefined is falsey

if (lastname) {
	console.log('your lastname is ' + lastname);
}

var middlename = null; // null is falsey

if (middlename) {
	console.log('hi');
}