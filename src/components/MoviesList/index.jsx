import React from 'react';
import {
  View, FlatList,
} from 'react-native';
import styles from './styles';
import MoviesListItem from '../MoviesListItem';

const MoviesList = ({ cinemaId, cinemaMovies, navigate }) => (
  <View style={styles.listContainer}>
    <FlatList
      numColons={cinemaMovies.length}
      data={cinemaMovies}
      renderItem={({
        item: {
          id, name, image, plot, durationMinutes, releaseYear, genres, showtimes,
        },
      }) => (
        <View>
          <MoviesListItem
            cinemaId={cinemaId}
            id={id}
            name={name}
            image={image}
            plot={plot}
            durationMinutes={durationMinutes}
            releaseYear={releaseYear}
            genres={genres}
            showtimes={showtimes}
            onPress={() => console.log('pressed')}
            navigate={navigate}
          />
        </View>
      )}
      keyExtractor={(cinema) => cinema.id.toString()}
    />
  </View>
);

export default MoviesList;
