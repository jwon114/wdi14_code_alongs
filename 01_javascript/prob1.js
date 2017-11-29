```
var date = new Date();
var thisYear = date.getFullYear();
var year = 2017;

if (year === thisYear) {
	console.log("Im in the present!");
} else if (year > thisYear) {
	console.log("Greetings from the future!");
} else {
	console.log("Whoa! Blast from the past!");
}

```