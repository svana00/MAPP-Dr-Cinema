import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const CinemaMoviesListItem = ({
  id, name, image, releaseYear, genres, onPress,
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

CinemaMoviesListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  releaseYear: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  genres: PropTypes.string.isRequired,
};

export default CinemaMoviesListItem;
