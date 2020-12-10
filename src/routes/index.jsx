import React from 'react';
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
    Main: {
      screen: MainNavigator,

      navigationOptions: {
        tabBarLabel: 'Forsíða',
        title: 'Forsíða',
        tabBarOptions: {
          showIcon: true,
          activeTintColor: 'black',
          inactiveTintColor: 'lightgrey',
        },
        tabBarIcon: () => (
          <Icon
            color="black"
            type="font-awesome"
            name="home"
            size={25}
          />
        ),
      },
    },
    Cinemas: {
      screen: CinemasStackNavigator,

      navigationOptions: {
        tabBarLabel: 'Kvikmyndahús',
        title: 'Kvikmyndahús',
        tabBarIcon: () => (
          <Icon
            color="black"
            type="font-awesome"
            name="film"
            size={25}
          />
        ),
      },
    },
    UpcomingMovies: {
      screen: UpcomingMoviesStackNavigator,

      navigationOptions: {
        tabBarLabel: 'Væntanlegt í bíó',
        title: 'Væntanlegt í bíó',
        tabBarIcon: () => (
          <Icon
            color="black"
            type="font-awesome"
            name="ticket"
            size={25}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Main',
    tabBarOptions: {
      showIcon: true,
      activeTintColor: 'black',
      inactiveTintColor: 'lightgrey',
    },
  },
);

export default createAppContainer(createSwitchNavigator(
  {
    Cinemas: BottomNavigator,
  },
  {
    initialRouteName: 'Cinemas',
  },
));
