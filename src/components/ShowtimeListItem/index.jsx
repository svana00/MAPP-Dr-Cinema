import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { List } from 'react-native-paper';
import styles from './styles';

const ShowtimeListItem = ({
  url, time, onPress,
}) => (
  <TouchableOpacity
    onPress={() => onPress(url)}
  >
    Kaupa miða kl
    {' '}
    {time}
  </TouchableOpacity>
);

CinemaListItem.propTypes = {
  url: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ShowtimeListItem;
