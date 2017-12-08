//pass in function to run and interval between each time
// clearInterval, setInterval

var startWalk = document.querySelector('.start');
var stopWalk = document.querySelector('.stop');
var img = document.querySelector('img');
var intervalID = '';
var direction = 'left';
var imgLeft = parseInt(window.getComputedStyle(img).left);

startWalk.addEventListener('click', startMoonWalking);
stopWalk.addEventListener('click', stopMoonWalking);

function moonWalk() {
	if (direction === 'left') {
		imgLeft = imgLeft + 1;
		if (imgLeft >= (window.screen.width - 250)) {
			img.classList.add('flipImg');
			direction = 'right';
		}
	}

	if (direction === 'right') {
		imgLeft = imgLeft - 1;	
		if (imgLeft <= -150) {
			img.classList.remove('flipImg');
			direction = 'left';
		}
	}

	img.style.left = imgLeft + 'px';
}

function startMoonWalking() {
	intervalID = setInterval(moonWalk, (1/60));

}

function stopMoonWalking() {
	clearInterval(intervalID);
}