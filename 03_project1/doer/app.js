var todoList = document.querySelector('.todo-list');
// lets find the first li
var listItem = document.querySelector('li');
// All the list items, returns an array of elements
var listItems = document.querySelectorAll('li');
// add event listener to when clicked a function is called
listItem.addEventListener('click', todoClickHandler); 

listItems.forEach(function(elem) {
	elem.addEventListener('click', todoClickHandler);
})

function todoClickHandler(event) {
	console.log(event.target.textContent);
	event.target.style.textDecoration = 'line-through';
}


