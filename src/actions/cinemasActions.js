import * as constants from '../constants';
import { getAllCinemas } from '../services/cinemasService';

export const getCinemasSuccess = (cinemas) => ({
  type: constants.GET_ALL_CINEMAS,
  payload: cinemas.sort((cin1, cin2) => cin1.name.localeCompare(cin2.name)),
});

export const getCinemas = (token) => async (dispatch) => {
  try {
    const cinemas = await getAllCinemas(token);
    const cinemasTrimmed = cinemas.map((cinema) => {
      const newCinema = {};
      Object.keys(cinema).forEach((key) => {
        if (key === 'description' && cinema.description) {
          const trimmedDescription = cinema.description.replace(/<br>/g, '\n').replace(/<b>/, '').trim();
          newCinema[key] = trimmedDescription;
        } else {
          newCinema[key] = cinema[key];
        }
      });
      return newCinema;
    });
    dispatch(getCinemasSuccess(cinemasTrimmed));
  } catch (error) {
    console.log('An error occurred in getAllCinemas action.', error);
  }
};
