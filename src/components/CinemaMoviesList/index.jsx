import React from 'react';
import {
  View, FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import CinemaMoviesListItem from '../CinemaMoviesListItem';

const CinemaMoviesList = ({ cinemaMovies, onPress }) => (
  <View>
    <FlatList
      numColumns={1}
      data={cinemaMovies}
      renderItem={({
        item: {
          id, name, image, plot, duration, releaseYear, genres, showtimes,
        },
      }) => (
        <View>
          <CinemaMoviesListItem
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
      keyExtractor={(movie) => movie.id.toString()}
    />
  </View>
);

CinemaMoviesList.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default CinemaMoviesList;
