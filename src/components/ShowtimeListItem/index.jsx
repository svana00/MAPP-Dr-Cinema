import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ShowtimeListItem = ({
  url, time, onPress,
}) => (
  <TouchableOpacity
    onPress={() => onPress(url)}
  >
    <Text>
      Kaupa miða kl
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
