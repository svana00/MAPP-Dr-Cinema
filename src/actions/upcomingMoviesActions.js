import * as constants from '../constants';
import getAllUpcomingMovies from '../services/moviesService';

export const getUpcomingMoviesSuccess = (movies) => ({
  type: constants.GET_UPCOMING_MOVIES,
  payload: movies,
});

export const getUpcomingMovies = (token) => async (dispatch) => {
  try {
    const movies = await getAllUpcomingMovies(token);
    console.log(movies);
    dispatch(getUpcomingMoviesSuccess(movies));
  } catch (error) {
    console.log('We had an ERROR in upcomingMoviesAction --> getUpcomingMovies', error);
  }
};
