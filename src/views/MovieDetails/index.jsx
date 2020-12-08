import React from 'react';
import {
  View, Text, Linking, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles';
import ShowtimeList from '../../components/ShowtimeList';

const MovieDetails = ({
  movieDetails,
}) => (
  <View style={{ flex: 1, backgroundColor: '#e5e5e5' }}>

    <View style={{ alignItems: 'center' }}>
      <Image source={{ uri: movieDetails[0].image }} style={styles.thumbnailImage} resizeMode="cover" />
    </View>
    <View style={styles.infoContainer}>
      <Text>
        {' '}
        Söguþráðurinn:
        {movieDetails[0].plot}
      </Text>
      <Text>
        {' '}
        Lengd í mínútúm:
        {movieDetails[0].duration}
        {' '}
      </Text>
      <Text>
        {' '}
        Útgáfuár:
        {' '}
        {movieDetails[0].releaseYear}
        {' '}
      </Text>
      <Text>
        {' '}
        Myndaflokkar:
        {movieDetails[0].genres}
        {' '}
      </Text>
    </View>
    <ShowtimeList
      onPress={(url) => Linking.openURL(url)}
      showtimes={movieDetails[0].showtimes}
    />
  </View>
);

MovieDetails.propTypes = {
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

export default connect(mapStateToProps)(MovieDetails);
