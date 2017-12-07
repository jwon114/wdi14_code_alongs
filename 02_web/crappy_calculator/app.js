var num1_input = document.querySelector('.num1');
var num2_input = document.querySelector('.num2');
var span = document.querySelector('span');
var addBtn = document.querySelector('button');

function add() {
	var result = Number(num1_input.value) + Number(num2_input.value);
	span.textContent = result;
}

addBtn.addEventListener('click', add);

