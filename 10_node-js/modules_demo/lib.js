var lunch = 'beef'

function whatsForLunch() {
	return lunch
}

function whatsForDinner() {
	return 'pudding'
}

module.exports = {
	dinner: whatsForDinner,
	lunch: whatsForLunch
};