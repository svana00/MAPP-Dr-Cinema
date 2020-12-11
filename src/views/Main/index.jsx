import React from 'react';
import {
  View, ImageBackground, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import logo from '../../resources/logo.png';
import styles from './styles';

const Main = () => (
  <View style={styles.container}>
    <ImageBackground source={logo} style={styles.logo} />
  </View>
);

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    addListener: PropTypes.func.isRequired,
  }).isRequired,
};

export default Main;
