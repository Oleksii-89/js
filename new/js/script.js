/*jshint esversion: 6 */

const numberOfFilms = +prompt('Skolko filmov glanul?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('Kakoy film?', '');
      b = prompt('Ocenka?', '');
      c = prompt('Kakoy film?', '');
      d = prompt('Ocenka?', '');

personalMovieDB.movies [a] = b;
personalMovieDB.movies [c] = d;

console.log(personalMovieDB);