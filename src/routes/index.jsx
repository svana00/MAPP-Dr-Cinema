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
    Main: MainNavigator,
    Cinemas: CinemasStackNavigator,
    UpcomingMovies: UpcomingMoviesStackNavigator,
  },
  {
    initialRouteName: 'Cinemas',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Main') {
          iconName = 'home';
        } else if (routeName === 'Cinemas') {
          iconName = 'film';
        } else if (routeName === 'UpcomingMovies') {
          iconName = 'ticket';
        }
        return (
          <Icon
            color="black"
            type="font-awesome"
            name={`${iconName}`}
            size={25}
          />
        );
      },
    }),
    tabBarOptions: {
      showIcon: true,
      activeTintColor: 'gray',
      inactiveTintColor: 'gray',
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
