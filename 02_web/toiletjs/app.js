var bowl = document.querySelector('.bowl');
var hole = document.querySelector('.hole');
var flush = document.querySelector('.flush');

// ES6 version
// bowl.addEventListener('click', () => bowl.classList.add('poop'))

bowl.addEventListener('click', changeBowlColor);
flush.addEventListener('click', flushBowl);

function changeBowlColor() {
	bowl.classList.add('poop');
	hole.classList.add('poop');
}

function flushBowl() {
	if (bowl.classList.contains('poop')) {
		bowl.classList.add('poop_swirl');
	} else {
		bowl.classList.add('swirl');
	}
	bowl.classList.remove('poop');
	hole.classList.remove('poop');
	flush.classList.add('flush_down');
	setTimeout(function() {
		flush.classList.remove('flush_down');
	}, 500)
	
	setTimeout(function() {
		bowl.classList.remove('poop_swirl');
		bowl.classList.remove('swirl');
	}, 3000)
}


