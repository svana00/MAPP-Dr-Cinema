import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';
import Header from '../../components/Header';

const UpcomingMoviesTrailers = ({
  movieDetails,
}) => (
  <View style={styles.container}>
    <Header
      title={movieDetails[0].name}
    />
  </View>
);

UpcomingMoviesTrailers.propTypes = {
  movieDetails: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  movieDetails:
  state.upcomingMovies.filter((movie) => movie.id === ownProps.navigation.state.params.id),
});

export default connect(mapStateToProps)(UpcomingMoviesTrailers);
