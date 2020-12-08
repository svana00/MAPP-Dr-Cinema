import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Main from '../views/Main';
import Cinemas from '../views/Cinemas';
import CinemaDetails from '../views/CinemaDetails';
import UpcomingMovies from '../views/UpcomingMovies';

const CinemasStackNavigator = createStackNavigator({
  Main,
  Cinemas,
  CinemaDetails,
});

const UpcomingMoviesStackNavigator = createStackNavigator({
  Main,
  UpcomingMovies,
});

const DrawerNavigator = createDrawerNavigator({
  Cinemas: CinemasStackNavigator,
  UpcomingMovies: UpcomingMoviesStackNavigator,
});

export default createAppContainer(DrawerNavigator);
