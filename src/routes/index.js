import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Main from '../views/Main';
import Cinemas from '../views/Cinemas';
import CinemaDetails from '../views/CinemaDetails';

const CinemasStackNavigator = createStackNavigator({
  Main,
  Cinemas,
  CinemaDetails,
});

const UpcomingMoviesStackNavigator = createStackNavigator({
  Main,
});

const DrawerNavigator = createDrawerNavigator({
  Cinemas: CinemasStackNavigator,
  UpcomingMovies: UpcomingMoviesStackNavigator,
});

export default createAppContainer(DrawerNavigator);
