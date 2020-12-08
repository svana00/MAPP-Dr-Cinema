import React from 'react';
import {
  View, Text, FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import { getMoviesForCinema } from '../../actions/cinemaMoviesActions';
import Header from '../../components/Header';
import MoviesList from '../../components/MoviesList';

class CinemaDetails extends React.Component {
  componentDidMount() {
    const { getMoviesForCinema, cinemaDetails } = this.props;
    getMoviesForCinema(cinemaDetails[0].id);
  }

  render() {
    const {
      newMovies, cinemaMovies, cinemaDetails, navigation: { navigate },
    } = this.props;
    return (
      <View>
        <FlatList
          data={cinemaDetails}
          style={styles.container}
          renderItem={({
            item: {
              id, name, description, address, phone, website, city,
            },
          }) => (
            <View>
              <Header
                title={name}
              />
              <View style={styles.listContainer}>
                <Text style={styles.heading}>{name}</Text>
                {description ? (
                  <Text style={styles.description}>
                    {description}
                  </Text>
                )
                  : null}
                {(description) ? (
                  <Text style={styles.heading}>
                    More info
                  </Text>
                )
                  : null}
                {address ? (
                  <Text style={styles.info}>
                    {address}
                    ,
                    {city}
                  </Text>
                )
                  : (
                    <Text style={styles.info}>
                      {city}
                    </Text>
                  )}
                {phone ? (
                  <Text style={styles.info}>
                    {phone}
                  </Text>
                )
                  : null}
                <Text
                  style={styles.info}
                >
                  {website}
                </Text>
              </View>
              <MoviesList
                onPress={(id, name, image, plot, durationMinutes, releaseYear, genres, showtimes) => navigate('MovieDetails', {
                  id, name, image, plot, durationMinutes, releaseYear, genres, showtimes,
                })}
                cinemaId={id}
                cinemaMovies={cinemaMovies}
                navigate={navigate}
              />
            </View>
          )}
          keyExtractor={(cinema) => cinema.id.toString()}
        />
      </View>
    );
  }
}

CinemaDetails.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  cinemaDetails: state.cinemas.filter(
    (cinema) => cinema.id === ownProps.navigation.state.params.id,
  ),
  cinemaMovies: state.cinemaMovies,
});

export default connect(mapStateToProps, { getMoviesForCinema })(CinemaDetails);
