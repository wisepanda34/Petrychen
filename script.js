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



const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		personalMovieDB.count = +prompt('how much films did you watch?', '');
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('how much films did you watch?', '');

		}
	},
	rememberMyFilms: function () {
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
	},
	detectPersonalLevel: function () {
		if (personalMovieDB.count <= 10) {
			console.log('less');
		} else if (personalMovieDB.count <= 30 && personalMovieDB.count > 10) {
			console.log('good');
		} else if (personalMovieDB.count > 30) {
			console.log('much');
		} else {
			console.log('error cinena');
		}
	},

	showMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},

	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	writeYourGenres: function () {
		for (let i = 1; i <= 3; i++) {
			let favoriteGenre = prompt(`What is your favorite genre № ${i} ?`);
			if (favoriteGenre != '' && favoriteGenre != null && isNaN(favoriteGenre)) {
				personalMovieDB.genres.push(favoriteGenre);
			} else {
				i--;
				console.log('Repeat please input');
			}
		}
		personalMovieDB.genres.forEach((element, g) => {
			console.log(`Your favorite genre #${g + 1} is ${element}`);
		});
	},
}
personalMovieDB.start()
personalMovieDB.rememberMyFilms()





/*1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/