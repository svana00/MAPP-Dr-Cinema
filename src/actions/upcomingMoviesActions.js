import * as constants from '../constants';
import getAllUpcomingMovies from '../services/moviesService';

export const getUpcomingMoviesSuccess = (movies) => ({
  type: constants.GET_UPCOMING_MOVIES,
  payload: movies, //  payload: cinemas.sort((cin1, cin2) => cin1.name.localeCompare(cin2.name)),
});

export const getUpcomingMovies = (token) => async (dispatch) => {
  try {
    const movies = await getAllUpcomingMovies(token);
    dispatch(getUpcomingMoviesSuccess(movies));
  } catch (error) {
    console.log('We had an ERROR in upcomingMoviesAction --> getUpcomingMovies', error);
  }
};
