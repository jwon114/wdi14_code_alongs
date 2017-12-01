var people = ['Alex', 'James', 'Robbie', 'Anushka', 'Ross', 'Aysa', 'Joanna Phillips',
'Chang', 'Johanna Schreiner', 'Sheila', 'Emma', 'Karen',
'Sherry', 'Ethan', 'Mark', 'Sophie', 'Fouad', 'Mia', 'Vivien', 'Haofu', 'Wally'];
var scrambled = [];
var group_size = 6;
var valid = false;

// scramble the array of people
var scrambleArray = function(people) {
	var newArr = [];
	while (people.length > 0) {
		var random = Math.floor((Math.random() * people.length));
		var person = people[random];
		newArr.push(person);
		people.splice(random,1);
	}
	return newArr
}

scrambled = scrambleArray(people);

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

	// pop the last sub array and assign to leftovers
	var leftovers = groups.pop();

	// reassign remaining leftover people to the groups spread as evenly as possible
	var newGroup = 0;
	for (var l = 0; l < leftovers.length; l++) {
		groups[newGroup].push(leftovers[l]);
		(newGroup < groups.length - 1) ? newGroup++ : newGroup = 0;
	}

    // for (var l = 0; l < leftovers.length; l++) {
    //     var randomGroup = Math.floor((Math.random() * groups.length));
    //     groups[randomGroup].push(leftovers[l]);
    // }

}

// console.log('scrambled people', scrambled);
console.log('groups', groups);
