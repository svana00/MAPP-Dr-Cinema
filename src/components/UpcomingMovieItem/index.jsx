import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const UpcomingMovieItem = ({
  id, title, poster, year, onPress,
}) => (
  <TouchableOpacity
    onPress={() => onPress(() => { console.log('movie pressed', id); })}
  >
    <View style={[styles.listItem, { opacity: 1 }]}>
      <View style={styles.textBox}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.title}>{poster}</Text>
        <Text style={styles.website}>{year}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

UpcomingMovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default UpcomingMovieItem;
