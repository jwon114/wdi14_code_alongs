var people = ['Alex', 'James', 'Robbie', 'Anushka', 'Ross', 'Aysa', 'Joanna Phillips',
'Chang', 'Johanna Schreiner', 'Sheila', 'Emma', 'Karen',
'Sherry', 'Ethan', 'Mark', 'Sophie', 'Fouad', 'Mia', 'Vivien', 'Haofu', 'Wally'];
var scrambled = [];
var group_size = 5;
// var group_size = prompt('Enter the group size');
var valid = false;

// if (group_size.match(/\d+/) && group_size <= people.length) {
// 	valid = true;
// }

// scramble the array of people
var scramble = function(people) {
	while (people.length > 0) {
		var random = Math.floor((Math.random() * people.length));
		var person = people[random];
		scrambled.push(person);
		people.splice(random,1);
	}
}

// if (valid) {
	scramble(people);

	var groups = [];
	if (scrambled.length % group_size === 0) {
		for (var i = 0; i < scrambled.length; i+=group_size) {
			var sub_group = scrambled.slice(i, i + group_size);
			groups.push(sub_group);
		}
	} else {
		for (var i = 0; i < scrambled.length; i+=group_size) {
			var sub_group = scrambled.slice(i, i + group_size);
			groups.push(sub_group);
		}
		var leftovers = groups.pop();
		console.log('leftover', leftovers);

		for (var l = 0; l < leftovers.length; l++) {
			var randomGroup = Math.floor((Math.random() * groups.length));
			groups[randomGroup].push(leftovers[l]);
		}

	}

	// console.log('scrambled people', scrambled);
	console.log('groups', groups);
// } else {
// 	group_size = prompt('Not a valid group size!');
// }