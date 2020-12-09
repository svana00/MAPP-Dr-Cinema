import React from 'react';
import {
  View, Text, Image, ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import logo from '../../resources/logo.png';
import styles from './styles';

const image = { uri: 'https://reactjs.org/logo-og.png' };

const Main = ({ navigation: { navigate } }) => (
  <View style={styles.container}>
    <Image source={logo} style={styles.logo} />
  </View>
);

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    addListener: PropTypes.func.isRequired,
  }).isRequired,
};

export default Main;
