import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const UpcomingMovieItem = ({
  id, name, image, releaseDate, onPress,
}) => (
  <TouchableOpacity
    onPress={() => onPress(() => { console.log('movie pressed', id); })}
  >
    <View style={[styles.listItem, { opacity: 1 }]}>
      <View style={{ alignItems: 'center' }}>
        <Image source={{ uri: image }} style={styles.thumbnailImage} resizeMode="cover" />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.website}>{releaseDate}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

UpcomingMovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default UpcomingMovieItem;
