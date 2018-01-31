var stars = document.querySelectorAll(".star");

stars.forEach(function(star) {
	star.addEventListener('click', function(event) {
		event.target.closest(".ui-card").querySelector(".star-count").textContent++;

		// DT's way
		// var card = event.target.closes('.ui-card');
		// var starCount = card.querySelector('.star-count');
		// starCount.textContent = Number(starCount.textContent) + 1;
	})
})