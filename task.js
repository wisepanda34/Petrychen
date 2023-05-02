'use strict';

//1) Проверка на палиндром

// function palindrom(str) {

// 	str = str.toLowerCase();
// 	let str2 = str.split('');

// 	str2 = str2.reverse();
// 	str2 = str2.join('');

// 	if (str == str2) return true;
// 	else return false;

// }

// const palidrom = str => {
// 	str = str.toLowerCase();
// 	return str == str.split('').reverse().join('');
// }

// console.log(palidrom('1Abba1'));

//2) Сложение цены
const goods = [
	{ price: 40 },
	{ price: -130 },
	{ price: '105' },
	{ price: 250 }
];

function calculateTotal(items) {
	let total = 0;

	for (const { price } of items) {
		if (typeof price !== 'number') continue;
		if (price >= 0) {
			total += price;
			console.log(`Price: ${price}`);
		}
	}
	return total;
}

// console.log(calculateTotal(goods));

//3) Поиск товара по имени
const purchase = {
	electronics: [
		{ name: 'Laptop', price: 1500 },
		{ name: 'Laptop', price: 1300 },
		{ name: 'Keyboard', price: 100 },
		{ name: 'Mouse', price: 50 },
		{ name: 'Mouse', price: 45 },
		{ name: 'Mouse', price: 20 },
	],
	textile: [
		{ name: 'Bag', price: 50 },
		{ name: 'Bag', price: 80 },
		{ name: 'Mouse pad', price: 15 },
	]
}

const find = (obj, product) => {
	const resFind = [];
	for (let group in obj) {
		for (let item of obj[group]) {
			if (item.name === product) {
				resFind.push(item);
			}
		}
	}
	console.log(resFind);

};

// const result = find(purchase, 'Mouse');

//4) Задача: Напишите функцию, которая принимает массив чисел и возвращает сумму всех элементов массива.

const arr1 = [5, 6, 82, 52, 10];

const sum = (arr) => {
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0)
			total = total + arr[i];
	}
	console.log(`Total = ${total}`);
}

// sum(arr1);

//5)Напишите функцию, которая принимает на вход два массива чисел и возвращает новый массив, содержащий только те числа, которые встречаются в обоих исходных массивах.
const arr2 = [4, 3, 8, 7, 6];
const arr3 = [1, 2, 8, 5, 6];

const intersection = (ar2, ar3) => {
	const resSame = [];

	for (let i = 0; i < ar2.length; i++) {
		if (resSame.includes(ar2[i])) continue;
		if (ar3.includes(ar2[i]))
			resSame.push(ar2[i]);
	}
	console.log(`resSame= ${resSame}`);
}
// intersection(arr2, arr3);

//6)Напишите функцию, которая принимает на вход массив чисел и возвращает сумму всех чисел, кратных 3 или 5.
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sumMultiples = (arr) => {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 3 === 0 || arr[i] % 5 === 0) {
			sum += arr[i];
		}
	}
	console.log(`Sum (3,5) =${sum}`);
}
// sumMultiples(arr4)

//7)Напишите функцию, которая принимает на вход строку и возвращает новую строку, в которой все слова перевернуты задом наперед.
const str1 = 'Hello world. You are the best'
const reverseWord = (str) => {
	const words = str.split(" ")
	const reversed = words.map(word => {
		return word.split('').reverse().join('')
	})

	console.log(reversed.join(' '));
}
// reverseWord(str1)

//8)Напишите функцию, которая принимает на вход два аргумента: массив чисел и целевое число. Функция должна вернуть индексы двух чисел из массива, сумма которых равна целевому числу.
// Например, для массива [2, 7, 11, 15] и целевого числа 9 функция должна вернуть массив [0, 1], так как 2 + 7 = 9.

function twoSum(nums, target) {
	// Создаем пустой объект для хранения значений и их индексов
	const map = {};

	// Итерируемся по массиву
	for (let i = 0; i < nums.length; i++) {
		const currentNum = nums[i];
		const complement = target - currentNum;

		// Проверяем, есть ли в объекте значение, которое дополняет текущее значение до целевого
		if (map[complement] !== undefined) {
			return [map[complement], i];
		}

		// Добавляем текущее значение и его индекс в объект
		map[currentNum] = i;
	}

	// Если пара чисел не найдена, возвращаем null
	return null;
}

// Пример использования
const nums = [-2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
// console.log(result); // [0, 1]

//9)Напишите функцию, которая принимает на вход два массива чисел и возвращает новый массив, содержащий только те числа, которые есть и в первом, и во втором массиве.

// Например, для массивов [1, 2, 3, 4, 5] и [3, 4, 5, 6, 7] функция должна вернуть массив [3, 4, 5], так как только эти числа присутствуют в обоих массивах.

function chooseNum(arr1, arr2) {
	const newArr = [];
	for (let i = 0; i < arr1.length; i++) {
		if (newArr.includes(arr1[i])) continue;
		if (arr2.includes(arr1[i])) {
			newArr.push(arr1[i])
		}
	}
	console.log(newArr);
}
const arr11 = [1, 2, 3, 4, 5]
const arr22 = [3, 4, 5, 6, 7]
// chooseNum(arr11, arr22)

//10)Напишите функцию, которая принимает на вход массив объектов, где каждый объект имеет свойство name (строка) и свойство age (число), и возвращает новый массив, отсортированный по возрастанию значений свойства age.

// Например, для массива объектов [{name: "Alice", age: 25}, {name: "Bob", age: 18}, {name: "Charlie", age: 32}] функция должна вернуть массив [{name: "Bob", age: 18}, {name: "Alice", age: 25}, {name: "Charlie", age: 32}].

function sortByAge(arr) {
	// Используем метод sort для сортировки массива по возрастанию значения свойства age
	arr.sort((a, b) => a.age - b.age);
	return arr;
}

// Пример использования
const arr = [{ name: "Alice", age: 25 }, { name: "Bob", age: 18 }, { name: "Charlie", age: 32 }];
// const resultAge = sortByAge(arr);
// console.log(resultAge); 

//11)Напишите функцию, которая принимает на вход массив строк и возвращает новый массив, содержащий только те строки, которые имеют длину больше или равную заданному порогу.

// Например, для массива ["a", "ab", "abc", "abcd", "abcde"] и порога 3 функция должна вернуть массив ["abc", "abcd", "abcde"], так как только эти строки имеют длину 3 или больше.

function filterLength(arr, length) {
	const newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length >= length)
			newArr.push(arr[i])
	}
	console.log(newArr);
}

const arr5 = ['sdafvd', 'fds', 'sdvfervfe', 'vd', 'vevre']
// filterLength(arr5, 3)

//12)Напишите функцию, которая принимает на вход массив объектов с полями name (строка) и age (число) и возвращает новый массив, содержащий только имена людей, возраст которых больше заданного значения.

// Например, для массива [{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 20}] и значения возраста 25 функция должна вернуть массив ["Bob"], так как только у Боба возраст больше 25 лет.
const arr6 = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }, { name: "Charlie", age: 20 }]

function sortName(arr, ageStop) {
	const newArr = []
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].age >= ageStop)
			newArr.push(arr[i].name)
	}
	console.log(newArr);
}
// sortName(arr6, 25)

//13)Напишите функцию, которая принимает на вход два аргумента: строку и символ. Функция должна возвращать количество раз, которое символ встречается в строке (регистр символов не учитывается).

// Например, для строки "Hello, world!" и символа "o" функция должна вернуть число 2, так как символ "o" встречается в строке два раза.
const str13 = 'Hello world. I love you!';
function countSymbol(str, char) {
	let count = 0;
	str = str.toLowerCase()
	char = char.toLowerCase()
	for (let i = 0; i < str.length; i++) {
		if (str[i] === char) count++
	}
	console.log('count = ' + count);
}
// countSymbol(str13, 'i')

//14)Напишите функцию, которая принимает на вход массив чисел и возвращает сумму квадратов нечетных чисел в массиве.

// Например, для массива [1, 2, 3, 4, 5] функция должна вернуть число 35, так как квадраты нечетных чисел (1, 3, 5) равны 1, 9 и 25, и их сумма равна 35.

const arr14 = [1, 2, 3, 4, 5]
function sumSquares(arr) {
	let res = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 !== 0)
			res += Math.pow(arr[i], 2)


	}
	console.log('res: ' + res);
}
// sumSquares(arr14)
//15)Напишите функцию, которая принимает на вход массив строк и возвращает новый массив, содержащий только те строки, которые содержат заданную подстроку.

// Например, для массива ["hello", "world", "goodbye", "cruel", "world"] и подстроки "oo", функция должна вернуть массив ["goodbye"], так как только в этой строке содержится подстрока "oo".

const arr15 = ["hello", "world", "goodbye", "cruel", "world"]
function findStr(arr, sub) {
	const newArr = []
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].includes(sub)) {
			newArr.push(arr[i])
		}
	}
	console.log(newArr);
}
// findStr(arr15, 'or')

//16)Напишите функцию, которая принимает на вход массив объектов, каждый из которых представляет собой информацию о покупке: {product: "название товара", price: цена товара, quantity: количество товара}. Функция должна вернуть общую стоимость всех покупок.

// Например, для массива [{product: "apple", price: 0.5, quantity: 10}, {product: "banana", price: 0.3, quantity: 5}, {product: "pear", price: 0.4, quantity: 3}] функция должна вернуть число 6.5, так как общая стоимость всех покупок равна сумме произведений цены и количества каждого товара: 0.5 * 10 + 0.3 * 5 + 0.4 * 3 = 6.5.

const arr16 = [{ product: "apple", price: 0.5, quantity: 10 }, { product: "banana", price: 0.3, quantity: 5 }, { product: "pear", price: 0.4, quantity: 3 }]
function totalPrice(arr) {
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		total += arr[i].price * arr[i].quantity
	}
	console.log(`Total=${total}`);
}
// totalPrice(arr16)

//17)Напишите функцию, которая принимает на вход массив чисел и возвращает новый массив, содержащий только нечетные числа из исходного массива, отсортированные по возрастанию.

// Например, для массива [1, 5, 2, 6, 3, 7, 4] функция должна вернуть массив [1, 3, 5, 7].
const arr17 = [11, 5, 2, 6, 3, 7, 4]
function sortOdd(arr) {
	// const newArr = []
	// for (let i = 0; i < arr.length; i++) {
	// 	if (arr[i] % 2 !== 0) {
	// 		newArr.push(arr[i])
	// 	}
	// }
	// console.log(newArr.sort());
	const sortedOddNumbers = arr.filter(num => num % 2 !== 0).sort((a, b) => { return a - b })
	console.log(sortedOddNumbers);
}
// sortOdd(arr17)

//18)Напишите функцию, которая принимает на вход массив строк и возвращает массив со строками, которые  являются палиндромом. Палиндром - это слово, которое читается одинаково слева направо и справа налево.

const arr18 = ["racecar", "javascript", "abba", "deleted"]
function polindromCheck(arr) {
	const newArr = []
	for (let i = 0; i < arr.length; i++) {
		const strLowerCase = arr[i].toLowerCase();
		const strRev = strLowerCase.split('').reverse().join('');
		if (strLowerCase === strRev) {
			newArr.push(arr[i])
		}
	}
	console.log(newArr);
}
// polindromCheck(arr18)

//19)Напишите функцию, которая принимает на вход массив объектов вида {name: 'John', age: 25} и возвращает новый массив, содержащий только имена людей из исходного массива, возраст которых больше 18 лет.

const arr19 = [{ name: 'John', age: 25 }, { name: 'Mary', age: 17 }, { name: 'David', age: 20 }]
function mapOver18(arr) {
	const newArr = arr.filter(person => person.age > 18).map(person => person.name);

	console.log(newArr);
}
// mapOver18(arr19)

//20)Напишите функцию, которая принимает на вход массив чисел и возвращает новый массив, в котором каждый элемент равен сумме всех элементов исходного массива, находящихся слева от этого элемента (включая его самого).

const arr20 = [1, 5, 10, 2, 100]
function sumRes(arr) {
	let sum = 0
	const newArr = []
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i]
		newArr.push(sum)
	}
	console.log(newArr);
}
// sumRes(arr20)

//21)Напишите функцию, которая принимает на вход массив строк и возвращает новый массив, в котором все элементы исходного массива записаны в обратном порядке, но каждое слово в каждом элементе осталось на своем месте.

// Например, для массива ['hello world', 'my name is John'] функция должна вернуть массив ['dlrow olleh', 'nmae ym si nhoJ'].
const arr21 = ['hello world', 'my name is John', 'abba']
function revArr(arr) {
	const newArr = arr.map(str => str.split('').reverse().join(''))
	console.log(newArr);
}
// revArr(arr21)

function reverseWords(arr) {
	const result = [];

	// Проходим по всем элементам исходного массива
	for (let i = 0; i < arr.length; i++) {
		// Разбиваем элемент на слова и записываем их в новый массив
		const words = arr[i].split(' ');

		// Разворачиваем каждое слово и склеиваем обратно в строку
		const reversedWords = words.map(word => word.split('').reverse().join(''));

		// Склеиваем слова в обратном порядке и записываем в новый массив
		result.push(reversedWords.reverse().join(' '));
	}

	return result;
}

// Пример использования
const arr221 = ['hello world', 'my name is John'];
// const result221 = reverseWords(arr221);
// console.log(result221); // ['dlrow olleh', 'nmae ym si nhoJ']

//23) Напишите функцию, которая находит самое длинное слово в заданной строке.

const str23 = 'hello worldfprth, great britain'

function longWord(str) {
	let longestWord = ''
	let long = 0
	const arr = str.split(' ')
	for (let i = 0; i < arr.length; i++) {
		const word = arr[i].replace(/[^a-zA-Z]/g, '');// удаляем все символы, кроме букв
		if (word.length > long) {
			long = word.length;
			longestWord = word;
		}
	}
	console.log(longestWord, long);
}
// longWord(str23)

//24)Напишите функцию, которая принимает на вход объект и возвращает массив его свойств в алфавитном порядке. Если свойство объекта само является объектом, то его свойства должны быть добавлены в результирующий массив вместо объекта.



function getSortedProperties(obj) {
	const result = [];

	// Получаем все свойства объекта
	const properties = Object.keys(obj);

	// Сортируем свойства в алфавитном порядке
	properties.sort();

	// Проходим по всем свойствам
	for (let i = 0; i < properties.length; i++) {
		const property = properties[i];

		// Если свойство является объектом, добавляем его свойства в массив
		if (typeof obj[property] === 'object') {
			const subProperties = getSortedProperties(obj[property]);
			result.push(...subProperties);
		} else {
			// Иначе добавляем свойство в массив
			result.push(property);
		}
	}

	return result;
}

const obj241 = { a: 1, c: { d: 2, b: 3 }, e: 4 };
// const result24 = getSortedProperties(obj241);
// console.log(result24); // ['a', 'b', 'd', 'e']

//25)
function uniqueValues(arr) {
	// Создаем пустой объект для хранения уникальных значений
	const uniqueObj = {};

	// Проходим по всем элементам массива
	for (let i = 0; i < arr.length; i++) {
		// Добавляем элемент в объект, если его там еще нет
		if (!uniqueObj[arr[i]]) {
			uniqueObj[arr[i]] = true;
		}
	}

	// Возвращаем массив ключей объекта
	return Object.keys(uniqueObj).map(key => parseInt(key));
}

// Пример использования
const arr25 = [1, 2, 3, 2, 4, 3, 5];
// const result25 = uniqueValues(arr25);
// console.log(result25); // [1, 2, 3, 4, 5]

//26)Напишите функцию, которая принимает на вход два аргумента: массив чисел и число, которое нужно найти в массиве. Функция должна вернуть индекс первого вхождения числа в массиве или -1, если число не найдено.

// Например, для массива [1, 2, 3, 4, 5] и числа 3 функция должна вернуть 2, а для массива [1, 2, 3, 4, 5] и числа 6 функция должна вернуть -1.

function indexNum(arr, num) {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === num) {
			return i;
		}
	}
	return -1;
}
const arr26 = [1, 2, 3, 4, 5]
const num26 = 8
// const res26 = indexNum(arr26, num26)
// console.log(res26);

//27)Напишите функцию, которая принимает на вход два аргумента: массив объектов и функцию-критерий. Функция-критерий должна принимать на вход объект и возвращать true, если объект удовлетворяет определенному условию, и false в противном случае. Функция должна вернуть новый массив, состоящий из объектов исходного массива, которые удовлетворяют критерию.Например, для массива объектов [{name: 'John', age: 30}, {name: 'Alice', age: 25}, {name: 'Bob', age: 40}] и функции-критерия function(obj) { return obj.age > 30; } функция должна вернуть массив [{name: 'Bob', age: 40}].

function filterPropyrty(arr, criteriaFunc) {
	const newArr = []
	for (let i = 0; i < arr.length; i++) {
		if (criteriaFunc(arr[i])) {
			newArr.push(arr[i])
		}
	}
	return newArr;
}
const arr27 = [
	{ name: 'John', age: 30 },
	{ name: 'Alice', age: 25 },
	{ name: 'Bob', age: 40 }
];
const criteriaFunc = function (obj) { return obj.age > 28 }
// const res27 = filterPropyrty(arr27, criteriaFunc)
// console.log(res27);

//28)Напишите функцию, которая принимает на вход массив чисел и возвращает новый массив, в котором каждый элемент равен сумме всех элементов исходного массива, кроме этого элемента.

// Например, для массива [1, 2, 3, 4] функция должна вернуть массив [9, 8, 7, 6]

function sumOfOtherElements(arr) {
	const sum = arr.reduce((acc, curr) => { return acc + curr }, 0);
	return arr.map(num => sum - num)
}
const arr28 = [1, 2, 3, 4, 5, 6]
// const res28 = sumOfOtherElements(arr28)
// console.log(res28);

//29)Напишите функцию chunkArray, которая принимает на вход массив и размер чанка (количество элементов в каждом чанке), и возвращает новый массив, разбитый на чанки заданного размера. Если входной массив не делится нацело на размер чанка, последний чанк может содержать меньшее количество элементов.

// Например, для массива [1, 2, 3, 4, 5] и размера чанка 2 функция должна вернуть массив [[1, 2], [3, 4], [5]].

function chunkArray(arr, chunkSize) {
	const newArr = [];
	for (let i = 0; i < arr.length; i += chunkSize) {
		newArr.push(arr.slice(i, i + chunkSize));
	}
	return newArr;
}
const arr29 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const chunkedArr = chunkArray(arr29, 2);
// console.log(chunkedArr);

//30))Напишите функцию countUniqueValues, которая принимает на вход отсортированный массив чисел и возвращает количество уникальных значений в этом массиве.

// Например, для массива [1, 1, 2, 2, 3, 4, 4, 5] функция должна вернуть 5, т.к. в массиве есть только 5 уникальных значения: 1, 2, 3, 4, 5.

function countUniqueValues(arr) {
	let count = 0;
	const arrWithoutUnique = [];
	for (let i = 0; i < arr.length; i++) {
		if (!arrWithoutUnique[arr[i]]) {
			arrWithoutUnique[arr[i]] = true
			count++;
		}
	}
	return count;
}
const arr30 = [1, 1, 2, 2, 3, 4, 4, 5]
// const res30 = countUniqueValues(arr30)
// console.log(res30);

//31)Напишите функцию reverseWords, которая принимает на вход строку и возвращает новую строку, в которой порядок слов перевернут.

// Например, для строки "Hello world!" функция должна вернуть "world! Hello". Обратите внимание, что знаки препинания и пробелы должны остаться на своих местах.
function reverseWords(str) {
	const words = str.split(' ');
	let res = ''
	for (let i = words.length - 1; i >= 0; i--) {
		res = res + words[i] + ' ';
	}
	return res.trim();
}
const str31 = 'Hello world and js!'
// const res31 = reverseWords(str31)
// console.log(res31);

//32)Напишите функцию doubleArray, которая принимает на вход массив чисел и возвращает новый массив, в котором каждый элемент умножен на 2.
// Например, для массива [1, 2, 3] функция должна вернуть [2, 4, 6].

function doubleArray(arr) {
	const newArr = arr.map(item => item * 2)
	console.log(newArr);
}
const arr32 = [1, 2, 3]
// doubleArray(arr32)

//33)Напишите функцию filterByLength, которая принимает на вход массив строк и число n, и возвращает новый массив, в котором содержатся только те строки, которые имеют длину большую или равную n.
// Например, для массива ['apple', 'banana', 'pear', 'kiwi'] и числа 5 функция должна вернуть ['banana'].
function filterByLength(arr, n) {
	const res = arr.filter(item => item.length >= n)
	console.log(res);
}
const arr33 = ['apple', 'banana', 'pear', 'kiwi']
let n33 = 5
// filterByLength(arr33, n33)

//34)Напишите функцию formatDate, которая принимает на вход объект даты и возвращает строку с датой в формате DD.MM.YYYY.
// Например, для объекта даты new Date('2022-05-03T00:00:00') функция должна вернуть строку '03.05.2022'.
// Вот решение этой задачи с использованием методов getDate(), getMonth() и getFullYear() объекта даты:
function formatDate(date) {
	const day = date.getDay();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	const formattedDate = `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.${year}`;
	return formattedDate;
}

// const date34 = new Date('2023-05-03T00:00:00');
// const formattedDate = formatDate(date34);
// console.log(formattedDate); // '03.05.2022'

//35))Напишите функцию average, которая принимает на вход массив чисел и возвращает среднее арифметическое значение этих чисел.
// Например, для массива [1, 2, 3, 4, 5] функция должна вернуть число 3.
function average(arr) {
	if (arr.length === 0) return0;
	let sum = arr.reduce((acc, curr) => acc + curr, 0);
	console.log(sum);
	const middleValue = sum / arr.length;
	return middleValue;
}
// const arr35 = [1, 2, 3, 4, 5];
// const res35 = average(arr35);
// console.log(res35);

//36)Напишите функцию calculateDaysDiff, которая принимает на вход две даты в виде строк в формате "гггг-мм-дд" (например, "2022-05-01") и возвращает разницу в днях между ними.
function calculateDaysDiff(date1, date2) {
	const d1 = new Date(date1)
	const d2 = new Date(date2)
	const diffMls = Math.abs(d1.getTime() - d2.getTime())
	const mlsPerDay = 1000 * 60 * 60 * 24;
	const diffDays = Math.round(diffMls / mlsPerDay)
	return diffDays;
}

// Пример использования
// const date1 = "2022-05-01";
// const date2 = "2022-06-05";
// const diff = calculateDaysDiff(date1, date2);
// console.log(diff); 

//37))Напишите функцию formatDate, которая принимает на вход строку в формате "гггг-мм-дд" (например, "2022-05-01") и возвращает дату в формате "дд.мм.гггг" (например, "01.05.2022").
function formatDate(date) {
	const d1 = new Date(date);
	const year = d1.getFullYear();
	const month = d1.getMonth() + 1;
	const day = d1.getDate();

	const newformatOfDate = `${day < 10 ? '0' + day : day}.${month < 10 ? '0' : ''}${month}.${year}`;
	console.log(newformatOfDate);
}
const date37 = "2022-05-10";
// formatDate(date37)

//38)Напишите функцию getDaysDiff, которая принимает на вход две даты в формате "гггг-мм-дд" (например, "2022-05-01") и возвращает количество дней между этими датами (положительное число, если первая дата раньше второй, и отрицательное число в обратном случае).

function getDaysDiff(d1, d2) {
	const date1 = new Date(d1)
	const date2 = new Date(d2)

	const diffMls = date2.getTime() - date1.getTime()
	console.log(diffMls);
	const mlsPerDay = 1000 * 60 * 60 * 24;
	const days = Math.round(diffMls / mlsPerDay);
	console.log(days);
}
// const d1 = "2022-03-01";
// const d2 = "2022-04-10";
// getDaysDiff(d1, d2)

//39)Написать функцию calculateAge(birthday), которая принимает дату рождения в формате yyyy-mm-dd и возвращает возраст в годах, месяцах и днях, округленный до целых чисел.
function calculateAge(birthday) {
	const dateOfBirth = new Date(birthday)
	const today = new Date()
	let years = today.getFullYear() - dateOfBirth.getFullYear();
	let months = today.getMonth() - dateOfBirth.getMonth();
	let days = today.getDate() - dateOfBirth.getDate();

	if (months < 0 || months === 0 && days < 0) {
		years--;
		months += 12;
		if (days < 0) {
			months--;
			days = days + new Date(today.getFullYear(), today.getMonth(), 0).getDate();
		}
	}
	return `${years} ${years === 1 ? 'год' : 'лет'} ${months} ${months === 1 ? 'месяц' : 'месяцев'} ${days} ${days === 1 ? 'день' : 'дней'}`;
}
// const birthday39 = '1984-06-29'
// const res39 = calculateAge(birthday39)
// console.log(res39);

//40)Дан массив дат в формате "YYYY-MM-DD". Напишите функцию, которая принимает этот массив и возвращает массив строк с датами в формате "DD MMM YYYY", где MMM - сокращенное название месяца на английском языке.

// Пример:
// Входной массив: ["2023-05-01", "2023-06-15", "2023-08-21"]
// Выходной массив: ["01 May 2023", "15 Jun 2023", "21 Aug 2023"]

function convertDates(arr) {
	const newArr = [];
	let m = '';
	const arrOblects = arr.map(item => new Date(item));
	arrOblects.forEach(element => {
		const day = element.getDate().toString().padStart(2, '0');
		const month = element.getMonth();
		const year = element.getFullYear();
		switch (month) {
			case 0: m = 'jan'; break;
			case 1: m = 'feb'; break;
			case 2: m = 'mar'; break;
			case 3: m = 'apr'; break;
			case 4: m = 'may'; break;
			case 5: m = 'jun'; break;
			case 6: m = 'jul'; break;
			case 7: m = 'aug'; break;
			case 8: m = 'sep'; break;
			case 9: m = 'oct'; break;
			case 10: m = 'nov'; break;
			case 11: m = 'dec'; break;
			default: console.log('error');
		}
		const res = `${day} ${m} ${year}`;
		newArr.push(res)
	});
	console.log(newArr);
}

// function convertDates(arr) {
// 	return arr.map(item => {
// 		const d = new Date(item)
// 		const day = d.getDate().toString().padStart(2, '0');
// 		const month = getMonthNames(d.getMonth());
// 		const year = d.getFullYear().toString();
// 		return `${day} ${month} ${year}`
// 	})
// }
// function getMonthNames(month) {
// 	const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// 	return monthNames[month];
// }

const arr40 = ["2023-05-01", "2023-06-15", "2023-08-21"]
// const res40 = convertDates(arr40)
// console.log(res40);

//41)Задача: дан массив объектов, содержащих информацию о фильмах. Необходимо преобразовать массив таким образом, чтобы он содержал только названия фильмов. Решить с помощью метода map().
const arr41 = [
	{ title: 'The Shawshank Redemption', director: 'Frank Darabont', year: 1994 },
	{ title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 },
	{ title: 'The Dark Knight', director: 'Christopher Nolan', year: 2008 },
	{ title: '12 Angry Men', director: 'Sidney Lumet', year: 1957 },
	{ title: 'Schindler\'s List', director: 'Steven Spielberg', year: 1993 }
];
function filterName(arr) {
	const newArr = []
	arr.map(item => {
		return newArr.push(item.title)
	})
	console.log(newArr);
}
// filterName(arr41)
//Короткий вариант решения
// const movieTitles = arr41.map(movie => movie.title);
// console.log(movieTitles);


//42)Задача: дан массив чисел. Необходимо отфильтровать из него только четные числа и вернуть новый массив, содержащий только четные числа. Решить с помощью метода filter().
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr42 = numbers.filter(item => item % 2 == 0)
// console.log(arr42);

//43)Необходимо отфильтровать из  массива только тех студентов, которые изучают курс JavaScript и отсортировать их по возрасту в порядке возрастания. Решить задачу с помощью методов filter() и sort().
const students43 = [
	{
		name: 'John',
		age: 23,
		gender: 'male',
		course: 'JavaScript'
	},
	{
		name: 'Alice',
		age: 21,
		gender: 'female',
		course: 'Python'
	},
	{
		name: 'Bob',
		age: 22,
		gender: 'male',
		course: 'JavaScript'
	},
	{
		name: 'Mary',
		age: 20,
		gender: 'female',
		course: 'Java'
	}
];

const arr43 = students43.filter(item => item.course === 'JavaScript').sort((a, b) => a.age - b.age)
// console.log(arr43);

//44)У вас есть массив чисел. Напишите функцию, которая возвращает новый массив, содержащий только уникальные элементы исходного массива.
const arr44 = [1, 2, 2, 3, 4, 4, 5];
function findUnique(arr) {
	const newArr = []
	for (let i = 0; i < arr.length; i++) {
		if (newArr.includes(arr[i])) continue;
		else newArr.push(arr[i]);
	}
	console.log(newArr)
}
// findUnique(arr44); // [1, 2, 3, 4, 5]

//другой способ решения
function findUnique2(arr) {
	return arr.filter((value, index, array) => {
		return array.indexOf(value) === index;
	});

}
// const res44 = findUnique2(arr44);
// console.log(res44);

// 45)Задача: Напишите функцию, которая принимает массив чисел и возвращает новый массив, в котором каждый элемент представляет собой произведение всех элементов исходного массива, кроме элемента на текущей позиции.
const arr45 = [1, 2, 3, 4, 5]
function multiplineAllNum(arr) {
	const m = arr.reduce((a, b) => a * b)
	return arr.map(item => m / item)
}
// const resArr45 = multiplineAllNum(arr45)

//46)Напишите программу, которая выведет в консоль первые 10 символов строки str.
let str46 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
// const newStr46 = str46.slice(0, 10)
// console.log(newStr46);

//47)Напишите программу, которая удалит из массива элементы со второго по четвертый включительно и заменит их на новый элемент "pear". Выведите измененный массив в консоль.
let arr47 = ["apple", "banana", "orange", "kiwi", "mango"];
// arr47.splice(1, 3, 'pear')
// console.log(arr47);

//48)Дан массив чисел. Необходимо написать функцию, которая вернет новый массив, состоящий из уникальных элементов исходного массива, отсортированных по возрастанию.
const arr48 = [1, 3, 2, 3, 4, 1, 5, 6, 5, 4];
function uniqueSortedArray(arr) {
	const newArr = []
	for (let i = 0; i < arr.length; i++) {
		if (newArr.includes(arr[i])) continue;
		else newArr.push(arr[i]);
	}
	return newArr.sort((a, b) => a - b)
}


// const result48 = uniqueSortedArray(arr48);
// console.log(result48); // [1, 2, 3, 4, 5, 6]

//49)Задача: дан массив целых чисел, нужно найти все уникальные пары чисел, которые в сумме дают заданное число.
const arr49 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sum49 = 10;

function findPairs(arr, sum) {
	let pairs = []
	let complements = new Set();

	for (let i = 0; i < arr.length; i++) {
		let curr = arr[i]
		let diff = sum - curr;
		if (complements.has(diff)) {
			pairs.push([curr, diff])
		}
		complements.add(curr)
	}
	return pairs;
}
// console.log(findPairs(arr49, sum49)); // [[1, 9], [2, 8], [3, 7], [4, 6]]

//50)Дан массив numbers с числами. Напишите функцию findTriplets, которая будет находить все комбинации троек чисел из массива, которые в сумме дают 0. Функция должна возвращать массив всех найденных комбинаций.

function findTriplets(arr) {
	const triplets = []
	for (let i = 0; i < arr.length - 2; i++) {
		for (let j = i + 1; j < arr.length - 1; j++) {
			for (let k = j + 1; k < arr.length; k++) {
				if (arr[i] + arr[j] + arr[k] === 0) {
					triplets.push([arr[i], arr[j], arr[k]])
				}
			}
		}
	}
	return triplets;
}

// const numbers50 = [1, 2, 3, -2, -1, 0];
// const triplets50 = findTriplets(numbers50);
// console.log(triplets50); // [ [ 1, 2, -3 ], [ 1, -2, 1 ], [ 2, -1, -1 ], [ -2, 1, 1 ], [ 0, 0, 0 ] ]

//51)Задача: дан массив чисел. Найти в нем два числа, сумма которых равна заданному числу target. Вернуть индексы этих чисел в исходном массиве.
function twoSum51(nums, target) {
	const numsMap = new Map()
	const newArr = []
	const newArrNums = []

	for (let i = 0; i < nums.length; i++) {
		const complement = target - nums[i]
		if (numsMap.has(complement)) {
			newArr.push([numsMap.get(complement), i]) //в новый массив пушим массив из обоих индексов
			newArrNums.push([complement, nums[i]])
		}
		numsMap.set(nums[i], i) //добавляем в коллекцию ключ/значение
	}
	console.log(newArrNums);
	return newArr;


}
// const nums51 = [2, 7, 11, 15, 3, 6, 4, 5, 50];
// const target51 = 9;
// const result51 = twoSum51(nums51, target51);
// console.log(result51); // [0, 1]

//52)Задача: Напишите функцию uniqueElements(arr1, arr2) которая принимает на вход два массива и возвращает массив из уникальных элементов этих массивов.

function uniqueElements(arr1, arr2) {
	const newArr = [...arr1, ...arr2]
	console.log(newArr);
	const res = new Set();
	for (let i = 0; i < newArr.length; i++) {
		res.add(newArr[i])
	}
	console.log(res);
}

const arr52 = [1, 2, 3, 4, 5];
const arr522 = [3, 4, 5, 6, 7];
// uniqueElements(arr52, arr522)
// console.log(uniqueElements(arr52, arr522)); // [1, 2, 6, 7]

//53)Дан объект, представляющий информацию о сотруднике в компании. Необходимо написать функцию getEmployeeInfo(employee), которая принимает объект с информацией о сотруднике в формате:
const obj53 = {
	name: 'John Doe',
	position: 'Frontend Developer',
	salary: 4000,
	yearOfBirth: 1990,
	company: {
		name: 'ABC Company',
		address: {
			city: 'New York',
			street: '5th Avenue',
			number: 12
		}
	}
}

const newObj53 = {
	fullName: 'John Doe',
	age: 33,
	position: 'Frontend Developer',
	companyAddress: 'New York, 5th Avenue 12',
	salary: '4,000.00 USD'
}
function convertInfo53(employee) {
	const { name, position, salary, yearOfBirth, company: { address: { city, street, number } } } = employee;
	const fullName = name;
	const age = new Date().getFullYear() - yearOfBirth;
	const companyAddress = ` ${city}, ${street} ${number}`;
	const formattedSalary = new Intl.NumberFormat('ru-US', { style: 'currency', currency: 'USD' }).format(salary);

	return { fullName, age, position, companyAddress, salary: formattedSalary };
}

// const res53 = convertInfo53(obj53)
// console.log(res53);

//54)
function flatten(arr) {
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			result = result.concat(flatten(arr[i]));
		} else {
			result.push(arr[i]);
		}
	}
	return result;
}
flatten([1, 2, [3, 4], 5, [6, [7, 8], 9]]) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
flatten([]) // []

console.log(flatten([1, 2, [3, 4], 5, [6, [7, 8], 9]])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flatten([])); // []
