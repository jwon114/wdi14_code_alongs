// // the odd/even reporter
for (var i = 0; i <= 20; i++) {
	(i % 2 === 0) ? console.log(i + ' is even') : console.log(i + ' is odd');
}

// multiplication tables
for (var i = 1; i <= 10; i++) {
	for (var j = 1; j <= 10; j++) {
		console.log(i + ' * ' + j + ' = ' + i * j);
	}
}

// your top choices
// var myArr = ['blue', 'green', 'red', 'yellow', 'purple', 'black', 'white', 'indigo', 'teal', 'orange', 'pink', 'crimson'];
var myArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35]
for (var i = 1; i <= myArr.length; i++) {
	var number = i.toString();
	// get the last number as a string
	number = number[number.length - 1]
	if (number === '1' && i !== 11) {
		console.log('My ' + i + 'st' + ' choice is ' + myArr[i-1]);
	} else if (number === '2' && i != 12) {
		console.log('My ' + i + 'nd' + ' choice is ' + myArr[i-1]);
	} else if (number === '3' && i != 13) {
		console.log('My ' + i + 'rd' + ' choice is ' + myArr[i-1]);
	} else {
		console.log('My ' + i + 'th' + ' choice is ' + myArr[i-1]);
	}
}
