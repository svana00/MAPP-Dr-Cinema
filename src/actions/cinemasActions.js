import * as constants from '../constants';
import getAllCinemas from '../services/cinemasService';

export const getCinemasSuccess = (currentCinemas) => ({
  type: constants.GET_ALL_CINEMAS,
  payload: currentCinemas.sort((a, b) => a.name.localeCompare(b.name)),
});

export const getCinemas = (token) => async (dispatch) => {
  try {
    const currentCinemas = await getAllCinemas(token);
    dispatch(getCinemasSuccess(currentCinemas));
  } catch (error) {
    console.log('an error occurred getting cinemas', error);
  }
};
