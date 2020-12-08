import { combineReducers } from 'redux';
import cinemas from './cinemasReducer';
import cinemaMovies from './cinemaMoviesReducer';
import upcomingMovies from './upcomingMoviesReducer';

export default combineReducers({
  cinemas,
  cinemaMovies,
  upcomingMovies,
});
