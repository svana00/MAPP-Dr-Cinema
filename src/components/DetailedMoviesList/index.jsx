import React from 'react';
import {
  View, FlatList, Text
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import DetailedMoviesListItem from '../DetailedMoviesListItem';

const DetailedMoviesList = ({ movies, onPress }) => (
  <View style={styles.listContainer}>
    <FlatList
      numColumns={2}
      data={movies}
      renderItem={({
        item: {
          id, name, image, plot, duration, releaseYear, genres, rating, ageLimit, otherTitles,actors,directors,trailers,
        },
      }) => (
        <View>
          <DetailedMoviesListItem
            id={id}
            name={name}
            image={image}
            plot={plot}
            duration={duration}
            releaseYear={releaseYear}
            genres={genres}
            rating={rating}
            ageLimit={ageLimit}
            otherTitles={otherTitles}
            actors={actors}
            directors={directors}
            trailers={trailers}
            onPress={onPress}
          />
        </View>
      )}
      keyExtractor={(movie) => movie.id.toString()}
    />
  </View>
);

DetailedMoviesList.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default DetailedMoviesList;
