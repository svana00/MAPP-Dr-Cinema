import * as constants from '../constants';
import { getAllMoviesForCinema } from '../services/cinemasService';

export const getMoviesForCinemaSuccess = (movies) => ({
  type: constants.GET_CINEMA_MOVIES,
  payload: movies,
});

export const getMoviesForCinema = (cinemaId) => async (dispatch) => {
  try {
    const movies = await getAllMoviesForCinema(cinemaId).getMovies();
    console.log(movies);
    dispatch(getMoviesForCinemaSuccess(movies));
  } catch (err) {
    console.log('We had an ERROR in movieAction --> getCinemaDetails');
  }
};
