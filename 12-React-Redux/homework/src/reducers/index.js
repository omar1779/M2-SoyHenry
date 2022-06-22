import { combineReducers } from "redux";
import { ADD_MOVIE_FAVORITE, GET_MOVIES, GET_MOVIE_DETAIL, REMOVE_MOVIE_FAVORITE } from "../type";


const initialState = {
  moviesFavourites: [],
  moviesLoaded: [],
  movieDetail: {}
};

const movies = function (state = initialState, action) {
	if (action.type === ADD_MOVIE_FAVORITE) {
		return {
			...state,
			moviesFavourites: state.moviesFavourites.concat(action.payload)
    }
  }
  if (action.type === GET_MOVIES) {
		return {
			...state,
			moviesLoaded: action.payload.Search
    };
  }
	if (action.type === REMOVE_MOVIE_FAVORITE){
		return{
			...state,
			moviesFavourites: state.moviesFavourites.filter(movies => movies.imdbID !== action.payload)
		}
	}
	if (action.type === GET_MOVIE_DETAIL){
		return{
			...state,
			movieDetail : action.payload
		}
	}
  return state;
}
const reducer = combineReducers({movies});
export default reducer