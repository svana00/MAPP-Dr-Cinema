import React from 'react';
import {
  View, FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import UpcomingMovieItem from '../UpcomingMovieItem';

const UpcomingMoviesList = ({ movies, onPress }) => (
  <View style={styles.listContainer}>
    <FlatList
      numColumns={1}
      data={movies}
      renderItem={({
        item: {
          id, name, image, releaseDate,
        },
      }) => (
        <View>
          <UpcomingMovieItem
            id={id}
            name={name}
            image={image}
            releaseDate={releaseDate}
            onPress={onPress}
          />
        </View>
      )}
    />
  </View>
);

UpcomingMoviesList.propTypes = {
  onPress: PropTypes.func.isRequired,
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
  })).isRequired,
};

export default UpcomingMoviesList;
