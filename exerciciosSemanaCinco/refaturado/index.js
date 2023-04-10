// import {
//     closedEyeSVG,
//     coloredHeartsSVG,
//     coloredStarsSVG,
//     heartSVG,
//     openEyesSVG,
//     starSVG,
// } from ".util.js";

// import {icons} from "./utils.js"

// class Movie {
//     title;
//     duration;
//     score;
//     #favorite;
//     #watched;

  
  
//     constructor(title, score, duration) {
//       this.title = title;
//       this.score = score;
//       this.duration = duration;
//       this.#favorite = false;
//       this.#watched = false;
//     }
  
//     get favorite() {
//       return this.#favorite;
//     }

//     set favorite(value) {
//         this.#favorite = value;
//       }
    
//       get watched() {
//         return this.#watched;
//       }
    
//       set watched(value) {
//         this.#watched = value;
//       }
//     }

// document
// .querySelector("movie-register-form")
// addEventListener("submit", (e)=> e.preventDefault());

// const movie [];

// // function registerMovie  (){
//     window.registerMovie = () =>{
//     const movie = getMovieForForm();
//     if (isMovieRegitered(movie.title));
//     return alert("Já possui um filme cadastrado com este titulo");

//     movies.push(movie);
//     alert("Filme adicionado com sucesso");

//     clearForm();
//     listMovies();
//     // console.log(movies);
};

// window.togglewatched = (title) =>{
    // window.updateMovie = (title, key) =>
    // const index = getIndexOfMovie(title);
//     movies[index].watched = !movies[index].watched;
//     listMovies(movies);

// };

// const keyNewValue = !movies[index][key];

// // window.toggleFavorite = (title) =>{
// //     const index = getIndexOfMovie(title);
// //     movies[index].favorite = !movies[index].favorite;
// // }

// if (key === "favorite" && keyNewValue && isMaxFavorites)
//  return alert("Já existem três filmes favoritos");

//     movies[index][key] = keyNewValue;

//     if (key ===  "watched") updateTimeWatched();
//     updateElement(title,key, keyNewValue);
// };

// function updateTimeWatched(){
//     const totalMinutes = movies.reduce(
//         (time, movie) => (time += movie.watched ? +movie.duration: 0),
//         0

//     );

//     const time = getCalculedTime(totalMinutes);

//     document.getElementById("time-watched").querySeletor("span").innerHTML =
//     `${
//         time.hours ? time.hours + "horas": ""
//     }${
//         ime.hours && time.minutes
//         ?"e" + time.minutes + "minuto" + time.minutes
//         : !time.hours
//         ? time.minutes + "minuto" 
//         :""

//     }.`;
// }
// function getCalculatedTime(totalMinutes){
//     const hours = Math.floor(totalMinutes / 60);
//     const minutes = totalMinutes % 60;
//     return {hours, minutes};
// }

// function isMaxFavorites(){
//     return(
//         movies.reduce((count,movie) => (count += movie.favorite.favorite ? 1 : 0), 0)
//         >=3
//     );
// }

// function updateElement(id, key, isKeyActive){
//     document
//     .getElemetById(id.replaceAll("", "-"))
//     .querySelector(`#${key}-btn`).innerHTML =
//     icons[isKeyActive ? key : `not_${key}`];
// }

// function getIndexMovie(title){
//     return movies.findIndex((movie)=> movie.title === title)
// }

// function getMovieForForm(){
//     const title = document.getElementById("movie-title-input").value;
//     const score = document.getElementById("movie-score-input").value;
//     const duration = document.getElementById("movie-duration-input").value;

    // return{ title, score,duration, favorite: false, watched: false};
    // return new Movie(title, score,duration);
}

// function clearForm(){
//     document.getElementById("movie-title-input").value = "";
//     document.getElementById("movie-score-input").value = "";
//     document.getElementById("movie-duration-input").value = "";
// }

// function isMovieRegistered(title){
//     return movies.find((movie) => movie.title === title)
// }




