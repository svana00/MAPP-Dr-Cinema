import * as constants from '../constants';
import { getAllMoviesForCinema, token } from '../services/cinemasService';

export const getMoviesForCinemaSuccess = (movies) => ({
  type: constants.GET_CINEMA_MOVIES,
  payload: movies,
});

export const getMoviesForCinema = (cinemaId) => async (dispatch) => {
  try {
    var finalToken = await token();
    finalToken = finalToken.token;
    const movies = await getAllMoviesForCinema(cinemaId, finalToken).getMovies();
    dispatch(getMoviesForCinemaSuccess(movies));
  } catch (err) {
    console.log('We had an ERROR in movieAction --> getCinemaDetails', err);
  }
};
