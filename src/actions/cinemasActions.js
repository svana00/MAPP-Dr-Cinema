import * as constants from '../constants';
import getAllCinemas from '../services/cinemasService';

export const getCinemasSuccess = (cinemas) => ({
  type: constants.GET_ALL_CINEMAS,
  payload: cinemas.sort((cin1, cin2) => cin1.name.localeCompare(cin2.name)),
});

export const getCinemas = (token) => async (dispatch) => {
  try {
    const cinemas = await getAllCinemas(token);
    dispatch(getCinemasSuccess(cinemas));
  } catch (error) {
    console.log('An error occurred in getAllCinemas action.', error);
  }
};
