import * as constants from '../constants';
import { getAllMoviesForCinema, token } from '../services/cinemasService';

export const getMoviesForCinemaSuccess = (movies) => ({
  type: constants.GET_CINEMA_MOVIES,
  payload: movies.sort((mov1, mov2) => mov1.name.localeCompare(mov2.name)),
});

export const getMoviesForCinema = (cinemaId) => async (dispatch) => {
  try {
    let finalToken = await token();
    finalToken = finalToken.token;
    const movies = await getAllMoviesForCinema(cinemaId, finalToken).getMovies();
    dispatch(getMoviesForCinemaSuccess(movies));
  } catch (err) {
    console.log('An error happened in getMoviesForCinema action.', err);
  }
};
