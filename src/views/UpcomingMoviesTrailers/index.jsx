import React from 'react';
import { WebView } from 'react-native-webview';
import {
  View, Text, ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';
import Header from '../../components/Header';

const UpcomingMoviesTrailers = ({
  movieDetails,
}) => (
  <View style={styles.container}>
    <ImageBackground source={{ uri: movieDetails[0].image }} style={styles.BackgroundImage}>
      <View style={styles.Background}>
        <View style={styles.Header}>
          <Text style={styles.title}>{movieDetails[0].name}</Text>
        </View>
        {
          movieDetails[0].trailers[0]
            ? (
              <WebView
                style={styles.trailer}
                source={{ uri: movieDetails[0].trailers[0] }}
              />
            ) : (
              <View>
                <Text>Því miður, finnst enginn trailer fyrir þessa mynd</Text>
              </View>
            )
        }
      </View>
    </ImageBackground>
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
