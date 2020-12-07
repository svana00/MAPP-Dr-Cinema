import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: 'Welcome to this nice app.',
    };
  }

  render() {
    const {
      hello,
    } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: '#e5e5e5' }}>
        <Text>{hello}</Text>
        <Text>Hello there!</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 1 }}>
            <Button mode="contained" color="black" compact="True" onPress={() => console.log('Cinemas')}>
              <Text>Cinemas</Text>
            </Button>
          </View>
          <View style={{ flex: 1, width: 20 }}>
            <Button mode="contained" color="black" compact="True" onPress={() => console.log('UpcomingMovies')}>
              <Text>Upcoming Movies</Text>
            </Button>
          </View>
        </View>
      </View>
    );
  }
}

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    addListener: PropTypes.func.isRequired,
  }).isRequired,
};

export default Main;
