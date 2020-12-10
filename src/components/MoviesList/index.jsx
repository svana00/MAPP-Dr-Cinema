import React from 'react';
import {
  View, FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import MoviesListItem from '../MoviesListItem';

const MoviesList = ({ cinemaId, cinemaMovies, onPress }) => (
  <View style={styles.listContainer}>
    <FlatList
      numColumns={1}
      data={cinemaMovies}
      renderItem={({
        item: {
          id, name, image, plot, duration, releaseYear, genres, showtimes,
        },
      }) => (
        <View>
          <MoviesListItem
            cinemaId={cinemaId}
            id={id}
            name={name}
            image={image}
            plot={plot}
            duration={duration}
            releaseYear={releaseYear}
            genres={genres}
            showtimes={showtimes}
            onPress={onPress}
          />
        </View>
      )}
      keyExtractor={(cinema) => cinema.id.toString()}
    />
  </View>
);

MoviesList.propTypes = {
  cinemaId: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default MoviesList;
