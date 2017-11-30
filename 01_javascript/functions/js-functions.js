// 1. Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 100 or 101"
// - Call the function three times with different sets of values.

// your code here

var calculateAge = function(birthYear, currentYear) {
	var age1 = currentYear - birthYear;
	var age2 = age1 - 1;
	return 'You are either ' + age1 + ' or ' + age2;
}

console.log(calculateAge(1990, 2017));
console.log(calculateAge(1880, 1950));
console.log(calculateAge(1960, 1970));


//  2. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// your code here

var lengths = function(arrayOfStrings) {
	return arrayOfStrings.map(element => element.length)
}

console.log(lengths(['abcdddd','def']));
console.log(lengths(['hello', 'goodbye']));
console.log(lengths(['wowowowowowowowowowwoow', 'allo']));


// 3. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

// your code here

var transmogrifier = function(val1, val2, val3) {
	return Math.pow(val1 * val2, val3);
}

console.log(transmogrifier(1,2,3));
console.log(transmogrifier(4,1,2));

// 4. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// your code here

var wordReverse = function(string) {
	return string.split(' ').reverse().join(' ');
}

console.log(wordReverse('Hello my name is'));
console.log(wordReverse('This sentence is reversed'));





