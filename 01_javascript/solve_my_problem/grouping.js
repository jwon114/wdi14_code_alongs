// Global Variables (needs to be declared outside of document ready to be accessed)
var people = ['Alex', 'James', 'Robbie', 'Anushka', 'Ross', 'Aysa', 'Joanna Phillips',
'Chang', 'Johanna Schreiner', 'Sheila', 'Emma', 'Karen','Sherry', 'Ethan', 'Mark', 
'Sophie', 'Fouad', 'Mia', 'Vivien', 'Haofu', 'Wally'];


$(document).ready(function() {
	$('.generate_button').prop('disabled', true);
	generateInputEvent();
	generateClickEvent();
	submitClickEvent();
})

// scramble the array of people
var scrambleArray = function(people) {
	var newArr = [];
	// copy input array to new array and preserve original (people)
	var peopleArr = people.slice();
	while (peopleArr.length > 0) {
		var random = Math.floor((Math.random() * peopleArr.length));
		newArr.push(peopleArr[random]);
		peopleArr.splice(random, 1);
	}
	return newArr
}

function generateInputEvent() {
	$('.generate_number_input').keyup(function() {
		$('.generate_button').prop('disabled', this.value === '' ? true : false);
	});
}

function generateClickEvent() {
	$('.generate_button').on('click', function() {
		var generate_input = parseInt($('.generate_number_input').val());
		var intRegex = /^\d+$/;

		if ((intRegex.test(generate_input)) && (generate_input <= people.length)) {
			var scrambled = [];
			scrambled = scrambleArray(people);
			scrambled = scrambled.slice(0, generate_input);
			$('.people ol').empty();
			$('.groups p').text('');
			$('.groups ol').empty();
			scrambled.forEach(item => {
				$('.people ol').append("<li>" + item + "</li>")
			})
		} else {
			alert('Input is not valid. It must be an integer and less than the total number of people (in this example its 21)');
		}
	})
}

function submitClickEvent() {
	$('.submit_button').on('click', function() {
		var finalArr = []
		var peopleList = $('.people ol li');
		var groupSize = parseInt($('.group_number_input').val());
		var intRegex = /^[1-9][0-9]*/;

		if ((peopleList.length !== 0) && (intRegex.test(groupSize)) && (groupSize <= Math.floor(peopleList.length / 2))) {
			peopleList.each(function() { finalArr.push($(this).text()) });
			// slice the groups up based on group size
			var groups = [];
			for (var i = 0; i < finalArr.length; i+=groupSize) {
				var sub_group = finalArr.slice(i, i + groupSize);
				groups.push(sub_group);
			}

			if (finalArr.length % groupSize !== 0) {
				// pop the last sub array and assign to leftovers
				var leftovers = groups.pop();
				console.log('leftovers', leftovers);
				// reassign remaining leftover people to the groups spread as evenly as possible
				var newGroup = 0;
				for (var l = 0; l < leftovers.length; l++) {
					groups[newGroup].push(leftovers[l]);
					(newGroup < groups.length - 1) ? newGroup++ : newGroup = 0;
				}
			}
			$('.groups ol').empty();
			$('.groups p').text(groups.length + ' groups created for ' + peopleList.length + ' people');
			groups.forEach(group => {
				$('.groups ol').append('<li>' + group + ' (' + group.length + ')</li>');
			})
		} else {
			alert('There must be a list of people generated first. The number of people per group must also be less than half the size of the people list and greater than zero');
		}
	})
}
