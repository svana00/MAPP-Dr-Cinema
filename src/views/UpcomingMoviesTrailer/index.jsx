import React from 'react';
import {
  View, Text, ImageBackground, ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import WebView from 'react-native-webview';
import styles from './styles';

class UpcomingMoviesTrailer extends React.Component {
  genresToStr() {
    const {
      movieDetails,
    } = this.props;
    return movieDetails[0].genres.replace(/\n/g, ' / ');
  }

  render() {
    const {
      movieDetails,
    } = this.props;
    const newGenreStr = this.genresToStr();
    return (
      <ScrollView style={styles.container}>
        <ImageBackground source={{ uri: movieDetails[0].image }} style={{ width: '100%', height: '100%' }}>
          <View style={styles.background}>
            <View style={styles.header}>
              <Text style={styles.title}>{movieDetails[0].name}</Text>
              <AntDesign name="hearto" size={25} style={styles.heart} />
            </View>
            <View style={styles.content}>
              <View style={styles.genres}>
                <Text style={styles.facts}>{ newGenreStr }</Text>
              </View>
              <View>
                {movieDetails[0].duration !== 'N/A' ? (
                  <Text style={styles.facts}>
                    {movieDetails[0].duration}
                    {'  |  '}
                    {movieDetails[0].releaseDate}
                  </Text>
                )
                  : (
                    <Text style={styles.facts}>{movieDetails[0].releaseDate}</Text>
                  )}
                <Text style={styles.heading2}>Stikla</Text>
              </View>
            </View>
            {
                movieDetails[0].trailers[0]
                  ? (
                    <View style={styles.trailer}>
                      <WebView
                        style={{ marginTop: 20, width: 320, height: 230 }}
                        javaScriptEnabled
                        domStorageEnabled
                        source={{ uri: movieDetails[0].trailers[0] }}
                      />
                    </View>
                  ) : (
                    <View style={[styles.noTrailer, { justifyContent: 'center' }]}>
                      <Text
                        style={styles.facts}
                      >
                        Því miður fannst engin stikla fyrir þessa mynd
                      </Text>
                    </View>
                  )
              }
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

UpcomingMoviesTrailer.propTypes = {
  movieDetails: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
    trailers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  })).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    addListener: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state, props) => ({
  movieDetails:
  state.upcomingMovies.filter((movie) => movie.id === props.navigation.state.params.id),
});

export default connect(mapStateToProps)(UpcomingMoviesTrailer);
