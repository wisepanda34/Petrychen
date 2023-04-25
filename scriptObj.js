'use strict';

const options = {
	name: 'HP',
	width: 1280,
	height: 800,
	colors: {
		border: 'black',
		bg: 'red',
		color: 'white'
	},
	makeTest: function () {
		console.log('Test');
	}
}

//деструкторизация одного из свойств
const { border, bg, color } = options.colors;
console.log(border);

options.makeTest();

// console.log(options.name);
// delete options.name;
// console.log(options);

let counter = 0;

//перебор свойств объекта
for (let key in options) {
	if (typeof (options[key]) === 'object') {
		for (let i in options[key]) {
			console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
			counter++;
		}
	} else {
		console.log(`Свойство ${key} имеет значение ${options[key]}`);
		counter++;
	}
}
//подсчет количества свойств в объекте двумя разными способами
console.log(`Количество свойств объекта равно ${counter}`);
console.log(Object.keys(options).length);