import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements';
import Main from '../views/Main';
import Cinemas from '../views/Cinemas';
import CinemaDetails from '../views/CinemaDetails';
import MovieDetails from '../views/MovieDetails';
import UpcomingMovies from '../views/UpcomingMovies';

const MainNavigator = createStackNavigator({
  Main,
});

const CinemasStackNavigator = createStackNavigator({
  Cinemas,
  UpcomingMovies,
  CinemaDetails,
  MovieDetails,
});

const UpcomingMoviesStackNavigator = createStackNavigator({
  UpcomingMovies,
});

const BottomNavigator = createBottomTabNavigator(
  {
    Main: MainNavigator,
    Cinemas: CinemasStackNavigator,
    UpcomingMovies: UpcomingMoviesStackNavigator,
  },
  {
    initialRouteName: 'Main',
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
    },
  },
);

export default createAppContainer(createSwitchNavigator(
  {
    Cinemas: BottomNavigator,
  },
  {
    initialRouteName: 'Main',
  },
));
