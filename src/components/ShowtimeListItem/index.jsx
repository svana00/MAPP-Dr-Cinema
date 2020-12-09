import React from 'react';
import {
  Text, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ShowtimeListItem = ({
  url, time, onPress,
}) => (
  <TouchableOpacity
    onPress={() => onPress(url)}
    style={styles.container}
  >
    <Text style={styles.buy}>
      Kl.
      {' '}
      {time}
    </Text>
  </TouchableOpacity>
);

ShowtimeListItem.propTypes = {
  url: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ShowtimeListItem;
