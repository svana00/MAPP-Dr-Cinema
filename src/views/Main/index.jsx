import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import logo from '../../resources/logo.png';
import styles from './styles';

const Main = ({ navigation: { navigate } }) => (
  <View style={styles.container}>
    <Image source={logo} style={styles.logo} />
    <Text>Hello there!</Text>
    <View style={{ flexDirection: 'row' }}>
      <View style={styles.button}>
        <Button
          mode="contained"
          color="black"
          compact="True"
          onPress={() => navigate('Cinemas', null)}
        >
          <Text>Kvikmyndahús</Text>
        </Button>
      </View>
      <View style={styles.button}>
        <Button
          mode="contained"
          color="black"
          compact="True"
          onPress={() => navigate('Cinemas', null)}
        >
          <Text>Væntanlegt í bíó</Text>
        </Button>
      </View>
    </View>
  </View>
);

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    addListener: PropTypes.func.isRequired,
  }).isRequired,
};

export default Main;
