import * as constants from '../constants';
import { getAllMovies, token } from '../services/cinemasService';

export const getMovies = (movies) => ({
  type: constants.GET_ALL_MOVIES,
  payload: movies,
});

export const getMovies = () => async (dispatch) => {
  try {
    let finalToken = await token();
    finalToken = finalToken.token;
    const movies = await getAllMovies(finalToken).getMovies();
    dispatch(getMovies(movies));
  } catch (err) {
    console.log('We had an ERROR in AllMoviesAction --> getMovies', err);
  }
};
