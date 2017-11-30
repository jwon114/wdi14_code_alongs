console.log('functions');

// f = (c * (9 / 5)) + 32
// var magicNumber = 32 // global scope

									// parameter
var celsiusToFahrenheit = function(celsius) {
	var magicNumber = 32 // local variable within the function
	celsius = 70;
	return celsius * ( 9 / 5 ) + magicNumber;
}

					// argument
celsiusToFahrenheit(14)

console.log(celsiusToFahrenheit(1));

var celsius = 14;

celsiusToFahrenheit(celsius);

var addNumbers = function(arr) {
	arr.push(100)
	return arr[0] + arr[1];
}

console.log(addNumbers([2,3]));

var list = [2,3]

console.log(addNumbers(list));