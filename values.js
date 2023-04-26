'use strict';
//функция для поверхностного клонирования объекта
function copy(mainObj) {
	const copyObj = {};

	let key;
	for (key in mainObj) {
		copyObj[key] = mainObj[key]
	}
	return copyObj;
}

const numbers = {
	a: 8,
	b: 22,
	c: {
		x: 4,
		y: 10
	}
}

const newObj = copy(numbers);
console.log(newObj);

newObj.a = 100;
console.log(newObj);
console.log(numbers);

//Object.assign() - также поверхностное кланирование или присоединение объекта к другому объекту

const add = {
	d: 1,
	e: 20
}

console.log(Object.assign(newObj, add));

// клонирование массивов
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'dfvasvw';

console.log(oldArray);
console.log(newArray);

//4й способ поверхностного клонирования ES6,8  оператор spread
const video = ['youtube', 'rutube', 'vimeo'],
	blogs = ['wordpress', 'livejornal', 'bloggers'],
	internet = [...video, ...blogs, 'vk', 'fb'];

console.log(internet);

function logg(a, b, c) {
	console.log(a);
	console.log(b);
	console.log(c);
}
const num = [2, 'sos', true]
logg(...num);


const testArray = ['a', 'b']
const newTestArray = [...testArray]
console.log(testArray);
console.log(newTestArray);



const qqq = {
	one: 1,
	two: 2
}
const rrr = { ...qqq }
console.log(qqq);
console.log(rrr);

//===========================
const soldier = {
	health: 400,
	armor: 100,
	sayHello() {
		console.log('Hello!');
	}
}
const seb = {}
Object.setPrototypeOf(seb, soldier)

const john = Object.create(soldier)

john.sayHello()
console.log(seb.armor);



