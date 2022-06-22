import { GET_MOVIE_DETAIL, REMOVE_MOVIE_FAVORITE, ADD_MOVIE_FAVORITE, GET_MOVIES} from "../type/index";

export function addMovieFavorite(payload) {
    return { type: ADD_MOVIE_FAVORITE, payload };
}

export function getMovies(titulo) {
    return function(dispatch) {
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=2438a421s=" + titulo)
            .then(response => response.json())
            .then(json => {
            dispatch({ type: GET_MOVIES, payload: json });
            });
    };
}

export function getMovieDetail(idMovie){
    return function (dispatch){
        fetch(` http://www.omdbapi.com/?i=tt3896198&apikey=2438a421i=${idMovie}`)
        .then(response => response.json())
        .then(data => {
            dispatch({
                type: GET_MOVIE_DETAIL,
                payload: data
            });
        });
    };
};

export function removeMovieFavorite(idMovie){
    return {
        type : REMOVE_MOVIE_FAVORITE,
        payload : idMovie
    };
}