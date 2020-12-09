import React from 'react';
import {
  View, FlatList, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import UpcomingMovieItem from '../UpcomingMovieItem';

const UpcomingMoviesList = ({ movies, onPress }) => (
  console.log('mamma', movies),
    <View style={styles.listContainer}>
      <FlatList
        numColumns={1}
        data={movies}
        renderItem={({
          item: {
            id, title, poster, year,
          },
        }) => (
          <View>
            <UpcomingMovieItem
              id={id}
              name={title}
              image={poster}
              releaseYear={year}
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
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
  })).isRequired,
};

export default UpcomingMoviesList;
