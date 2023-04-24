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
let numberOfFilms = +prompt('how much films did you watch?', '');
console.log(typeof (numberOfFilms));
console.log(numberOfFilms);

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
}
const a = prompt('name last film that you watched!', ''),
	b = +prompt('what level does have this film?', ''),
	c = prompt('name last film that you watched!', ''),
	d = +prompt('what level does have this film?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
