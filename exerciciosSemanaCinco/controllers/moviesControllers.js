import {DomController} from "./domController.js"

const domCotroller = new DomController();

export class MovieController{
    #movies;

    constructor(){
        this.#movies = [];
    }

    get movies(){
        return this.movies;
    }

    addMovie(movie){
        this.#movies.push(movie);
}

isMaxFavorites(){
    return (
        this.#movies.reduce(
            (count,movie) => (count += movie.favorite ? 1 : 0),
            0
        ) >= 3
    );
}
getIndexMovie(title){
    return this.#movies.findIndex(
        (movie) => movie.title.tolowerCase() === title
    );
}
isMovieRegistered(title){
    return this.#movies.find((movie)=> movie.title === title);
}
filterMovies(filter){
    const filteredMovies = this.#movies.filter((movie)=>
    filter ? movie.title.tolowerCase().includes(filter.tolowerCase()) : true
    );
    if (!filteredMOvies.length)
    alert("Não foi encontrado nehum filme com este titulo");

    domController.listMovies(
    filteredMovies.length ? filteredMovies : this.#movies
    );
    }
}