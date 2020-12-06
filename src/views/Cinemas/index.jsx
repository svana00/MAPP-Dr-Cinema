import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hello: false,
    };
  }

  render() {
    const {
      hello,
    } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: '#e5e5e5' }}>
        <Text>{hello}</Text>
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
