import React from 'react';
import {connect} from 'react-redux';
import { View, Text } from 'react-native';
import ShowtimeList from '../../components/ShowtimeList';


class MovieDetail extends React.Component {
  static navigationOptions = {
    title: 'MovieDetail'
  },

  render() {
    const { movie } = this.props;
    //I want the title to be in the toolbar / header thingy
    return (
      <View style={{ flex: 1, backgroundColor: '#e5e5e5' }}>

        <View style={{ alignItems: 'center' }}>
          <Image source={{ uri: movie.image }} style={styles.thumbnailImage} resizeMode="cover" />
        </View>
        <View style={styles.infoContainer}>
          <Text> Söguþráðurinn: {movie.plot} </ Text>
          <Text> Lengd í mínútúm: {movie.duration} </ Text>
          <Text> Útgáfuár: {movie.release} </ Text>
          <Text> Myndaflokkar: {movie.genres} </ Text>
        </View>
        <ShowtimeList
          onPress={(url) => Linking.openURL(url)}
          showtimes={movie.showtimes}
        />
      </View>
  }
}

const mapStateToProps = (state, props) => {
  const { navigation } = props;
  const cinema = navigation.getParam('cinema', '');
  const movieId = navigation.getParam('movieId','');
  var movieObject = {};
  var times = {};
  var genres = "";
  for (var i in state.movies){
    if (state.movies[i].id === movieId){
      movieObject = state.movies[i]
    }
  }

  for (var x in movieObject.showtimes) {
    if (movieObject.showtimes[x].cinema.id === cinema){
      times = movieObject.showtimes[x].schedule
    }
  }

  for (var z in movieObject.genres) {
    genres += movie.genres[i].name + ', '
  }
  genres = genres.slice(0,-1)

  const movie = {
    name: movie.title,
    image: movie.poster,
    plot: movie.plot,
    duration: movie.durationMinutes,
    release: movie.year,
    genres: genres,
    showtimes: times,
  }

  return {
    movie,
  };
}
