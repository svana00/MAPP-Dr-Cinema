import React from 'react';
import {
  View, Linking,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';
import ShowtimeList from '../../components/ShowtimeList';
import Header from '../../components/Header';

const CinemaMovieDetails = ({
  movieDetails,
}) => (
  <View style={styles.container}>
    <Header
      title={movieDetails[0].name}
    />
    <ShowtimeList
      onPress={(url) => Linking.openURL(url)}
      movieDetails={movieDetails}
    />
  </View>
);

CinemaMovieDetails.propTypes = {
  movieDetails: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    plot: PropTypes.string,
    duration: PropTypes.number.isRequired,
    releaseYear: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = (state, props) => ({
  movieDetails:
  state.cinemaMovies.filter((movie) => movie.id === props.navigation.state.params.id),
});

export default connect(mapStateToProps)(CinemaMovieDetails);
