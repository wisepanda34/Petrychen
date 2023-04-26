'use srtict';

const arr = [1, 3, 5, 9, 7, 5, 4];
arr.pop();
arr.push(10);
arr.shift();
arr.unshift(12);
console.log(arr.sort(compare));

//функция для сортировки чисел в массиве через sort()
function compare(a, b) {
	return a - b
}

console.log(arr);

// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// for (let value of arr) {
// 	console.log(value);
// }

arr.forEach(function (item, i, arr) {
	console.log(`${i}: ${item} into array ${arr}`);
})

const str = prompt('input some names', '');
//объединяем строки в массив
const products = str.split(', ');
console.log(products);
//сотрируем
console.log(products.sort());
//разделяем массив на строки
console.log(products.join('; '));

