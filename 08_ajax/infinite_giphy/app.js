var search_word;
var offset = 0;

$('.search-button').on('click', function() {
	$('.container').empty();
	search_word = $('.search-input').val();
	if (search_word !== '') {
		$('.errors').text('');
		callAPI(search_word, offset);
	} else {
		$('.errors').text('No search word');
	}
})

$(window).on('scroll', function() {
	// console.log($(window).scrollTop())
	// console.log($(document).height())
	if (($(window).scrollTop() + $(window).height() == $(document).height()) && search_word) {
		offset += 10;
		callAPI(search_word, offset);
	}
})

function callAPI(search, offset = 0) {
	console.log('offset', offset)
	var options = {
		url: 'http://api.giphy.com/v1/gifs/search?api_key=cRGqkl94hWfmrHZsYcFenF0NCocnyaqr&limit=10&offset=' + offset + '&q=' + search
	}

	$.ajax(options)
	.done(function(response) {
		// console.log(response);
		console.log(response.data)
		response.data.forEach(function(giphy) {
			var gif = giphy.images.fixed_width.url
			var newGiphy = "<img src='" + gif + "'>"
			$('.container').append(newGiphy)
		})
	})
}