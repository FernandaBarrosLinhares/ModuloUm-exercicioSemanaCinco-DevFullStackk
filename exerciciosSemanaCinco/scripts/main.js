import { DomController } from "../controllers/domController.js";
import { ModalController } from "../controllers/modalController.js";
import { MoviesController } from "../controllers/moviesController.js";
import { createInteractiveScore } from "./score.js";


const moviesController = new MovieController();
const domController = new DomController();
const modalController = new ModalController();

document
    .querySelector("#modal-wrapper form")
    .addEventListener("submit",(event)=> {
        event.preventDefault();
    });

    // if (filter){
    //     movie.title.tolowerCase().includes(filter.tolowerCase());
    // }else{
    //     true;
    // }

    // filter ? movie.title.tolowerCase().includes(filter.tolowerCase()): true

    // const movie = []

document.getElementById("search-input").addEventListener("input", (e)=>{
    moviesController.filterMovies (e.target.value);
});

window.addMovieClicked = () => {
    modalController.openModal();
  };
  
  window.updateFormScore = (score) => {
    createInteractiveScore(score);
    document.getElementById("movie-score-input").value = score;
  };

window.registerMovie = ()=> {
    const movie= domController.getMovieFromForm();
    if (moviesController.isMovieRegistered(movie,title))
        return alert("Já possui um filme com o mesmo titulo");

        moviesController.addMovie(movie);
        domController.addCard(movie);
        alert("Filme adicionado com sucesso");

        // domController.clearForm()
};

window.updateMovie= (title, key) =>{
    const index= moviesController.getIndexOfMovie(title);
    const movies = moviesController.movies;
    const keyNewValue = [movies,[index],[key]];

    if (key === "favorite" && keyNewValue && moviesController.isMaxFavorite())
        return alert("Já possui três filmes favoritos");

        movies[index][key] = keyNewValue;

    if(key=== "watched") domController.updateTimeWatched(movies);
    domController.updateIcooElement(title, key, newvalue);    
};

createInteractiveScore();