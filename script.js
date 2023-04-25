'use strict';
/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
		- count - сюда передается ответ на первый вопрос
		- movies - в это свойство поместить пустой объект
		- actors - тоже поместить пустой объект
		- genres - сюда поместить пустой массив
		- privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
		- 'Один из последних просмотренных фильмов?'
		- 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
		movies: {
				'logan': '8.1'
		}

Проверить, чтобы все работало без ошибок в консоли */
// let numberOfFilms = +prompt('how much films did you watch?', '');
// console.log(typeof (numberOfFilms));
// console.log(numberOfFilms);

// const personalMovieDB = {
// 	count: numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	privat: false
// }
// const a = prompt('name last film that you watched!', ''),
// 	b = +prompt('what level does have this film?', ''),
// 	c = prompt('name last film that you watched!', ''),
// 	d = +prompt('what level does have this film?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// const num = 48;
// if (num < 50)
// 	console.log('error')
// else if (num > 100) console.log('no')
// else console.log('ok');

// const count = 48;
// (count === 48) ? console.log('ok') : console.log('error');

// let a = 50;
// while (a < 55) {
// 	console.log(a);
// 	a++;
// }
/*1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('how much films did you watch?', '');
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('how much films did you watch?', '');

	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
}

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('name last film that you watched!', '');
		const b = +prompt('what level does have this film?', '');

		if (a != null && b != null && a != '' && b != '' && a.length < 10) {
			console.log('ok');
			personalMovieDB.movies[a] = b;
		}
		else {
			i--;
			console.log('error');
		}
	}
}
rememberMyFilms();

// let r = 0;
// while (r < 3) {

// 	const a = prompt('name last film that you watched!', '');
// 	if (a.length > 10) {

// 	}
// 	const b = +prompt('what level does have this film?', '');
// 	personalMovieDB.movies[a] = b;
// 	r++;
// }


// const a = prompt('name last film that you watched!', ''),
// 	b = +prompt('what level does have this film?', ''),
// 	c = prompt('name last film that you watched!', ''),
// 	d = +prompt('what level does have this film?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

function detectPersonalLevel() {
	if (personalMovieDB.count <= 10) {
		console.log('less');
	} else if (personalMovieDB.count <= 30 && personalMovieDB.count > 10) {
		console.log('good');
	} else if (personalMovieDB.count > 30) {
		console.log('much');
	} else {
		console.log('error cinena');
	}
}
detectPersonalLevel();


/*1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции false - выводит в консоль главный объект программы.

3) Создать функцию writeYourGenres в которой пользователь будет отвечать 3 раза "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных genres.

P.S. Функции вызывать не обязательно. */

// let favoriteGenre;
// function writeYourGenres() {

// 	for (let i = 0; i < 3; i++) {
// 		favoriteGenre = prompt('What is your favorite genre?');
// 		while (favoriteGenre == '' || favoriteGenre == null || !isNaN(favoriteGenre)) {
// 			favoriteGenre = prompt('What is your favorite genre?');
// 		}
// 		personalMovieDB.genres.push(favoriteGenre);
// 	}
// }
function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		let favoriteGenre = prompt(`What is your favorite genre № ${i} ?`);
		if (favoriteGenre != '' && favoriteGenre != null && isNaN(favoriteGenre)) {
			personalMovieDB.genres.push(favoriteGenre);
		} else i--;
		console.log(favoriteGenre);
	}
}
writeYourGenres();



// function showMyDB() {
// 	if (personalMovieDB.privat == false) {
// 		console.log(personalMovieDB);
// 	} else console.log('privat is true!');
// }
// showMyDB();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.privat);