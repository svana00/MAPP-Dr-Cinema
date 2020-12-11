import React from 'react';
import { WebView } from 'react-native-webview';
import {
  View, Text, ImageBackground, ScrollView
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';
import Header from '../../components/Header';

const UpcomingMoviesTrailers = ({
  movieDetails,
}) => (
  <ScrollView style={styles.container}>
    <Header
      title={movieDetails[0].name}
    />
    <Text style={styles.heading}>Stikla</Text>
    <View style={{ flex: 1 }}>
      {
        movieDetails[0].trailers[0]
          ? (
            <WebView
              startInLoadingState
              style={styles.trailer}
              source={{ uri: movieDetails[0].trailers[0] }}
            />
          ) : (
            <Text style={styles.info}>Því miður er ekki til stikla fyrir þessa bíómynd.</Text>
          )
      }
    </View>
  </ScrollView>
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
