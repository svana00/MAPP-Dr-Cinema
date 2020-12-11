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
    onPress={() => onPress(id)}
  >
    <View style={[styles.listItem, { opacity: 1 }]}>
      <View style={{ alignItems: 'center' }}>
        <Image source={{ uri: image }} style={styles.thumbnailImage} resizeMode="cover" />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.website}>{releaseYear}</Text>
        <Text style={styles.website}>{genres}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

MovieListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  plot: PropTypes.string,
  duration: PropTypes.number.isRequired,
  releaseYear: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  genres: PropTypes.string.isRequired,
  showtimes: PropTypes.arrayOf(
    PropTypes.shape({
      schedule: PropTypes.arrayOf(PropTypes.shape({
        purchase_url: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
      })).isRequired,
    }).isRequired,
  ),
};

MovieListItem.defaultProps = {
  plot: null,
  showtimes: Array(),
};

export default MovieListItem;
