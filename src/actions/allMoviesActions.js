import * as constants from '../constants';
import { getAllMovies, token } from '../services/cinemasService';

export const getMoviesSuccess = (movies) => ({
  type: constants.GET_ALL_MOVIES,
  payload: movies.sort((mov1, mov2) => mov1.name.localeCompare(mov2.name)),
});

export const getMovies = () => async (dispatch) => {
  try {
    let finalToken = await token();
    finalToken = finalToken.token;
    const movies = await getAllMovies(finalToken).getMovies();
    dispatch(getMoviesSuccess(movies));
  } catch (err) {
    console.log('An error happened in getMovies action.', err);
  }
};
