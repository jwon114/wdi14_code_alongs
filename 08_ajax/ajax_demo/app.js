console.log('to the future');

// using s = jaws to request a list of movies
// use javascript dom creation to show it in the page wrapped in paragraphs for each movie

$('.search-button').on('click', function() {
	var search_word = $('.search-input').val();
	if (search_word !== '') {
		$('.errors').text('');
		callAPI(search_word);
	} else {
		$('.errors').text('No search word');
	}
})


function callAPI(search) {
	var options = {
		url: 'http://omdbapi.com/?apikey=2f6435d9&s=' + search
	}

	$.ajax(options)
	.done(function(response) {
		console.log(response);
		$('.container').empty();
		if (response.Response === "False") {
			$('.errors').text(response.Error);
		} else {
			response.Search.forEach(function(movie) {
				var movieLink = "http://www.imdb.com/title/" + movie.imdbID;
				var newMovie = 
				"<a class='movie' href='" + movieLink + "' target='_blank'>\
					<div class='movie-header'>\
						<h2 class='title'>" + movie.Title + "</h2>\
						<p class='year'>" + movie.Year + "</p>\
					</div>\
					<img class='movie-poster' src='" + movie.Poster + "'>\
				</a>"
				$('.container').append(newMovie);
			})
		}
	})
}

