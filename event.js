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

//5)Напишите функцию, которая будет отображать всплывающую подсказку при наведении на элемент. Подсказка должна показываться рядом с элементом и иметь текст, который передается в функцию в качестве аргумента.

const element5 = document.getElementById('element5');
const tooltip5 = document.createElement('div');
tooltip5.classList.add('tooltip5');
tooltip5.innerText = 'Тeкст подсказки';

element5.addEventListener('mouseover', () => {
	document.body.appendChild(tooltip5);
	const element5Rect = element5.getBoundingClientRect();
	const tooltip5Rect = tooltip5.getBoundingClientRect();
	tooltip5.style.top = element5Rect.top - tooltip5Rect.height - 5 + 'px';
	textLength = element5.textContent.length;
	tooltip5.style.left = element5Rect.left + textLength * 5 + 'px';
	// console.log('tooltip5.style.left=' + tooltip5.style.left);
	// console.log('element5Rect.left=' + element5Rect.left);
})
element5.addEventListener('mouseout', () => {
	document.body.removeChild(tooltip5);
})

//6)Создайте страницу с двумя кнопками: "Начать" и "Остановить". Когда пользователь нажимает на кнопку "Начать", на странице начинает появляться случайный цвет каждые 2 секунды. Когда пользователь нажимает на кнопку "Остановить", цвета перестают появляться.
const startBtn = document.getElementById('start-btn')
const stopBtn = document.getElementById('stop-btn')

let colorInterval;

function startColorInterval() {
	colorInterval = setInterval(() => {
		const randomColor = Math.floor(Math.random() * 16777215).toString(16);
		document.body.style.backgroundColor = '#' + randomColor;
	}, 2000);
}
function stopColorInterval() {
	clearInterval(colorInterval);
}

startBtn.addEventListener('click', startColorInterval);
stopBtn.addEventListener('click', stopColorInterval);

//7)Создайте страницу с кнопкой. При клике на кнопку происходит скачивание файла с заданным содержимым.
const downloadBtn = document.getElementById("download-btn");

downloadBtn.addEventListener("click", function () {
	const text = "Привет, я содержимое файла!";
	const filename = "file.txt";

	const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
	const link = document.createElement("a");

	link.href = window.URL.createObjectURL(blob);
	link.download = filename;

	document.body.appendChild(link);

	link.click();

	document.body.removeChild(link);
});

//8)Создать форму с инпутом для ввода числа и кнопкой. При клике на кнопку нужно сгенерировать случайное число от 1 до введенного числа и вывести его на экран в виде алерта.

const generateBtn = document.getElementById('generate-btn')

generateBtn.addEventListener('click', () => {
	const inputNum = document.getElementById('inputNum')
	let maxNum = inputNum.value;
	let randomNum = Math.floor(Math.random() * (maxNum) + 1);
	alert(randomNum);
})

//9)Создайте кнопку, которая будет менять цвет фона страницы при клике на нее. При повторном клике цвет фона должен возвращаться к исходному.

const changeColorBody = document.getElementById('changeColorBody')
const body = document.body;
let isChangeColor = false;
let originalColor;

changeColorBody.addEventListener('click', () => {

	if (!isChangeColor) {
		originalColor = body.style.backgroundColor;
		body.style.backgroundColor = 'green';
		isChangeColor = true;
	}
	else {
		body.style.backgroundColor = originalColor;
		isChangeColor = false;
	}
})
