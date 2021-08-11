let array = JSON.parse(localStorage.getItem('array')) || [];

function storeinlocalStorage(array) {
	localStorage.setItem('array', JSON.stringify(array));
}

function getInputValue() {
	
	let inputVal = document.getElementById('myInput').value;
	if (inputVal.length == 0){
		alert("PLEASE ENTER YOUR TO DO IN THE TEXT FIELD");
		return;
	}
	let source = document.getElementById('lu');

	let node = document.createElement('li');

	let newli = source.appendChild(node);
	newli.textContent += inputVal;
	let item = { name: inputVal };
	array.push(item);
	storeinlocalStorage(array);

	let button = document.createElement('button');
	button.textContent = 'Remove';

	newli.appendChild(button);
}

let submitBtn = document.getElementById('btn');
submitBtn.addEventListener('click', getInputValue, false);

let parent = document.getElementById('lu');

parent.addEventListener('click', function(event) {
	if (event.target.tagName === 'BUTTON') {
		event.target.parentElement.remove();
	}
	else if (event.target.tagName === 'LI') {
		event.target.style.textDecoration = 'line-through';
	}
});
