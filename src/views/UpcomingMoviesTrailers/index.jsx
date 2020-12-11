import React from 'react';
import {
  View, Text, ImageBackground,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import WebView from 'react-native-webview';
import styles from './styles';
import TrailerList from '../../components/TrailerList';
import Spinner from '../../components/Spinner';

class UpcomingMoviesTrailers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentWillUnmount() {
    this.setState({ isLoading: true });
  }

  render() {
    const {
      movieDetails, navigation: { navigate },
    } = this.props;
    const { isLoading } = this.state;
    const newGenreStr = movieDetails[0].genres.replace(/\n/g, ' / ');
    return (
      <View style={styles.container}>
        <ImageBackground source={{ uri: movieDetails[0].image }} style={{ width: '100%', height: '100%' }}>
          <View style={styles.Background}>
            <View style={styles.Header}>
              <Text style={styles.title}>{movieDetails[0].name}</Text>
              <AntDesign name="hearto" size={25} style={styles.heart} />
            </View>
            <View style={styles.content}>
              <View style={styles.genres}>
                <Text>{ newGenreStr }</Text>
              </View>
              <View style={styles.facts}>
                {movieDetails[0].duration !== 'N/A' ? (
                  <Text>
                    {movieDetails[0].duration}
                    {'  |  '}
                    {movieDetails[0].releaseDate}
                  </Text>
                )
                  : (
                    <Text>{movieDetails[0].releaseDate}</Text>
                  )}
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
                    <View style={[styles.trailer, { justifyContent: 'center' }]}>
                      <Text>Því miður, það finnst enginn trailer fyrir þessa mynd</Text>
                    </View>
                  )
              }
          </View>
        </ImageBackground>
      </View>
    );
  }
}

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
