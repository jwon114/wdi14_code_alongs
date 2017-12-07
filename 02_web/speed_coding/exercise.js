// EX1

// var recipe = {
// 	title: 'Burger',
// 	servings: 1,
// 	ingredients: ['bun','beef','lettuce','mayo','tomato']
// }

// console.log('Recipe', recipe.title);
// console.log('Serves', recipe.servings);
// console.log('Ingredients');

// recipe.ingredients.forEach(ingredient => console.log(ingredient))

// ALTERNATE METHOD
// console.log(recipe.ingredient.join('\n'));

// EX2

// var books = [
// 	{
// 		title: 'The Hobbit',
// 		author: 'J.R.R Tolkien',
// 		alreadyRead: true
// 	},
// 	{
// 		title: 'Lord of the Rings',
// 		author: 'J.R.R Tolkien',
// 		alreadyRead: false
// 	}
// ]

// books.forEach(book => { book.alreadyRead ? console.log('You already read ' + book.title + ' by ' + book.author) : console.log('You still need to read ' + book.title + ' by ' + book.author) })


// EX3

var imdb = {
	title: 'iron man',
	duration: 120,
	stars: ['robert downey jr', 'samuel l jackson']
}

var printMovieInfo = function(movie) {
	return movie.title + ' lasts for ' + movie.duration + ' minutes. Stars: ' + movie.stars;
}

console.log(printMovieInfo(imdb));








