import React from 'react';
import {
  View, Linking,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';
import MoviesList from '../../components/MoviesList';
import Header from '../../components/Header';

const MovieDetailsWithCinema = ({
  movieDetails,
}) => (
  <View style={styles.container}>
    <Header
      title={movieDetails[0].name}
    />
    <MoviesList
      onPress={(url) => Linking.openURL(url)}
      movieDetails={movieDetails}
    />
  </View>
);

MovieDetailsWithCinema.propTypes = {
  movieDetails: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    plot: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    releaseYear: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  movieDetails:
  state.cinemaMovies.filter((movie) => movie.id === ownProps.navigation.state.params.id),
});

export default connect(mapStateToProps)(MovieDetailsWithCinema);
