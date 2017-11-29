var myNumber = Number(prompt('Enter your guess between 1 and 10'));
var number = Math.floor((Math.random() * 10) + 1);
console.log('number: ' + number);

while (number !== Number(myNumber)) {
	if (myNumber < 1 || myNumber > 10) {
		myNumber = prompt('Number not within 1 and 10, guess again');
	} else if (myNumber > number) {
		myNumber = prompt('Guess is too high!');
	} else if (myNumber < number) {
		myNumber = prompt('Guess is too low!');
	} else {
		myNumber = prompt('Guess again');		
	}
}

alert('Congratulations! You guessed correctly!');