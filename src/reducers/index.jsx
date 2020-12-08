import { combineReducers } from 'redux';
import cinemas from './cinemasReducer';
import cinemaMovies from './cinemaMoviesReducer';

export default combineReducers({
  cinemas,
  cinemaMovies,
});
