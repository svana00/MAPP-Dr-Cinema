import React from 'react';
import {
  View, Linking, Image, Text, ScrollView, ImageBackground,
} from 'react-native';
import WebView from 'react-native-webview';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';
import MoviesList from '../../components/MoviesList';
import l from '../../resources/l.png';
import sixteen from '../../resources/sixteen.png';
import nine from '../../resources/nine.png';
import six from '../../resources/six.png';
import twelve from '../../resources/twelve.png';

class MoreDetailedDetailView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentWillUnmount() {
    this.setState({isLoading: true});
  }

  render() {
    const {
      movieDetails,
    } = this.props;
    const { isLoading } = this.state;
    const newGenreStr = movieDetails[0].genres.replace(/\n/g, ' / ');
    return (
      <ScrollView>
        <ImageBackground source={{ uri: movieDetails[0].image }} style={{ width: '100%', height: '100%' }}>
          <View style={styles.Background}>
            <View style={styles.Header}>
              <Text style={styles.title}>{movieDetails[0].name}</Text>
              <View style={styles.rating}>
                {
                    (movieDetails[0].ageLimit === "L")
                      ?  (<Image source={l} style={styles.limit}/>)
                      : (movieDetails[0].ageLimit === "16")
                      ?
                        (<Image source={sixteen} style={styles.limit}/>)
                      :
                        (movieDetails[0].ageLimit === "9")
                      ?
                        (<Image source={nine} style={styles.limit}/>)
                      :
                        (movieDetails[0].ageLimit === "6")
                      ?
                        (<Image source={six} style={styles.limit}/>)
                      :
                        (movieDetails[0].ageLimit === "12")
                      ?
                        (<Image source={twelve} style={styles.limit}/>)
                      :
                        (<Text>{movieDetails[0].ageLimit}</Text>)
                    }
              </View>
            </View>
            <View style={styles.content}>
              <View style={styles.genres}>
                <Text>{ newGenreStr }</Text>
              </View>
              <View style={styles.facts}>
                {movieDetails[0].duration !== 'N/A' ? (
                  <Text>
                    {movieDetails[0].duration}
                    {' mín  |  '}
                    {movieDetails[0].releaseYear}
                  </Text>
                )
                  : (
                    <Text>{movieDetails[0].releaseYear}</Text>
                  )}
              </View>
            </View>

            <View style={styles.secondaryFacts}>
              <Text style={styles.description}>
                {'\n'}
                {movieDetails[0].plot}
              </Text>
              <View>
                <Text style={styles.heading}>Einkunn</Text>
                <Text style={styles.description}>
                  {movieDetails[0].rating}
                  /10 á IMDB
                </Text>
              </View>

              <View>
                <Text style={styles.heading}>Leikarar</Text>
                <Text style={styles.description}>
                  {movieDetails[0].actors}
                </Text>
              </View>
              <View>
                <Text style={styles.heading}>Leikstjórar</Text>
                <Text style={styles.description}>
                  {movieDetails[0].directors}
                </Text>
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
                          androidHardwareAccelerationDisabled
                          source={{ uri: movieDetails[0].trailers[0] }}
                        />
                      </View>
                    ) : (
                      <View style={[styles.trailer, { justifyContent: 'center' }]}>
                        <Text style={{
                          paddingTop: 20, paddingHorizontal: 20, fontSize: 16, fontWeight: 'bold'
                        }}
                        >
                          Því miður, það finnst enginn trailer fyrir þessa mynd
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

MoreDetailedDetailView.propTypes = {
  movieDetails: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    plot: PropTypes.string,
    duration: PropTypes.number.isRequired,
    releaseYear: PropTypes.string.isRequired,
  })).isRequired,
};

MoreDetailedDetailView.defaultProps = {
  plot: '',
};

const mapStateToProps = (state, props) => ({
  movieDetails:
  state.allMovies.filter((movie) => movie.id === props.navigation.state.params.id),
});

export default connect(mapStateToProps)(MoreDetailedDetailView);
