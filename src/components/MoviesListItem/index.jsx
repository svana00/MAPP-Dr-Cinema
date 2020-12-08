import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const MovieListItem = ({
  id, name, image, plot, duration, releaseYear, genres, showtimes, onPress,
}) => (
  <TouchableOpacity
    onPress={() => onPress(id, name, image, plot, duration, releaseYear, genres, showtimes)}
  >
    <View style={[styles.listItem, { opacity: 1 }]}>
      <View style={{ alignItems: 'center' }}>
        <Image source={{ uri: image }} style={styles.thumbnailImage} resizeMode="cover" />
      </View>
      <View style={styles.textBox}>
        <Text>{name}</Text>
        <Text>{releaseYear}</Text>
        <Text>{genres}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  plot: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  releaseYear: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default MovieListItem;
