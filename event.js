//1)Напишите код на JavaScript, который будет обрабатывать событие клика на кнопку и изменять цвет фона страницы на случайный цвет.
const buttonChangeColor = document.getElementById('btnChangeColor');
buttonChangeColor.addEventListener('click', function () {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	document.body.style.backgroundColor = `rgb(${r},${g},${b})`;

})

//2)Напишите функцию addClickHandler, которая добавляет обработчик клика на все элементы с классом btn. При клике на кнопку с классом btn в консоль должно выводиться сообщение "Button clicked!".
const btnsClick = document.querySelectorAll('.btn');
btnsClick.forEach(item => {
	item.addEventListener('click', function () {
		console.log('Clicked on the btn');
	})
})
//3)напишите функцию, которая будет отслеживать клик на кнопке и менять текст кнопки при каждом клике на следующий вариант из заранее заданного списка текстов.
const buttonTexts = ['First name', 'next name', 'last name'];
const btnChangeText = document.getElementById('changeText');
let currentTextIndex = 0;

btnChangeText.addEventListener('click', function () {
	currentTextIndex++;
	if (currentTextIndex === buttonTexts.length) {
		currentTextIndex = 0;
	}
	btnChangeText.textContent = buttonTexts[currentTextIndex];
})

//4)Напишите функцию, которая будет добавлять или удалять элементы из списка при клике на соответствующие кнопки. При добавлении элемента пользователь должен ввести текст для нового элемента в модальном окне. При удалении элемента, нужно удалять последний добавленный элемент списка.
const listElems = document.getElementById('listElems');
const openModal = document.getElementById('btnAddElem');
const btnRemoveElem = document.getElementById('btnRemoveElem');
const modalAddElem = document.getElementById('modalAddElem');
const inputField = document.getElementById('inputField');
const submitElem = document.getElementById('submitElem');
const cancelElem = document.getElementById('cancelElem');

function showModal() {
	modalAddElem.style.display = `block`;
}
openModal.addEventListener('click', showModal);

function hideModal() {
	modalAddElem.style.display = `none`;
}
btnRemoveElem.addEventListener('click', removeLastItem);

let items = []

function createItem() {
	const newItem = inputField.value;
	if (newItem) {
		addItem(newItem);
	}
	hideModal();
}

function addItem(item) {
	items.push(item);
	const li = document.createElement('li');
	li.textContent = `${item}`;
	listElems.appendChild(li);
	inputField.value = '';
}

function removeLastItem() {
	if (items.length === 0) {
		return;
	}
	const liToRemove = listElems.lastChild;
	items.pop()
	listElems.removeChild(liToRemove)
}

submitElem.addEventListener('click', createItem);

cancelElem.addEventListener('click', () => {
	hideModal();
});

inputField.addEventListener('keydown', (e) => {
	if (e.key === 'Enter') {
		createItem()
	}
});

//5)