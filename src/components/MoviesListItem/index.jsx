import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { List } from 'react-native-paper';
import styles from './styles';

const MovieListItem = ({
  id, name, image, plot, durationMinutes, releaseYear, genres, showtimes, navigate,
}) => (
  <TouchableOpacity
    onPress={() => onPress(id, name, description, address, phone, website)}
  >
    {
  }
    <View style={[styles.listItem, { opacity: 1 }]}>
      <View style={styles.textBox}>
        <Text>{image}</Text>
        <Text>{name}</Text>
        <Text>{releaseYear}</Text>
        <Text>{genres}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default MovieListItem;
