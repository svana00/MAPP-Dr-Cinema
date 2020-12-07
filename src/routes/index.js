import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from '../views/Main';
import Cinemas from '../views/Cinemas';

export default createAppContainer(createStackNavigator({
  Cinemas,
  Main,
}));
