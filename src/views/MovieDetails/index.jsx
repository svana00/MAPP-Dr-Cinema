import React from 'react';
import {connect} from 'react-redux';
import { View, Text } from 'react-native';


class MovieDetail extends React.Component {
  static navigationOptions = {
    title: 'MovieDetail'
  },

  render() {
    const { movie } = this.props;
    return (
      <View style={{ flex: 1, backgroundColor: '#e5e5e5' }}>

        <View style={{ alignItems: 'center' }}>
          <Image source={{ uri: movie.image }} style={styles.thumbnailImage} resizeMode="cover" />
        </View>
        <View style={styles.infoContainer}>
          <TouchableOpacity onPress={() => { Linking.openURL(`tel:${phoneNumber}`); }}>
            <View style={styles.phone}>
            <Text style={styles.phoneNumber}>{phoneNumber}</Text>
            </View>
          </TouchableOpacity>
        </View>
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
