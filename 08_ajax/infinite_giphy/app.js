$(document).ready(function() {
	var search_word;
	var offset;
	var processing;

	$('.search-button').on('click', function() {
		$('.container').empty();
		search_word = $('.search-input').val();
		if (search_word !== '') {
			$('.errors').text('');
			offset = 0;
			callAPI(search_word, offset);
		} else {
			$('.errors').text('No search word');
		}
	})

	$(window).on('scroll', function() {
		console.log('scrollTop', $(window).scrollTop())
		console.log('doc height', $(document).height())
		console.log('window height', $(window).height())
		if (($(window).scrollTop() + $(window).height() == $(document).height()) && search_word && !processing) {
			offset += 10;
			callAPI(search_word, offset);
		}

		if ($(window).scrollTop() >= $(document).height() * 0.1) {
			$('.scroll-top').css('visibility', 'visible').fadeIn();
		} else {
			$('.scroll-top').fadeOut();
		}
	})

	$('.scroll-top').on('click', function() {
		$(window).scrollTop(0);
	})

	function callAPI(search, offset = 0) {
		console.log('offset', offset)
		processing = true;
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
			processing = false;
		})
	}
})