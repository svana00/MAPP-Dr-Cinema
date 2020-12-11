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
import Spinner from '../../components/Spinner';

class CinemaDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  async componentDidMount() {
    const { getMoviesForCinema, cinemaDetails } = this.props;
    await getMoviesForCinema(cinemaDetails[0].id);
    this.setState({ isLoading: false });
  }

  componentWillUnmount() {
    this.setState({ isLoading: true });
  }

  render() {
    const {
      cinemaMovies, cinemaDetails, navigation: { navigate },
    } = this.props;
    const { isLoading } = this.state;
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
                    Frekari upplýsingar
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
                  style={styles.website}
                >
                  {website}
                </Text>
                <Text style={styles.heading2}>
                  Kvikmyndir í sýningu
                </Text>
              </View>
              {
                isLoading
                  ? (
                    <View style={styles.bottom}>
                      <Spinner />
                    </View>
                  )
                  : (
                    <>
                      {cinemaMovies[0] ? (
                        null
                      )
                        : (
                          <View style={styles.bottom}>
                            <Text style={styles.info2}>
                              Því miður eru engar kvikmyndir í sýningu eins og stendur.
                            </Text>
                          </View>
                        )}
                      <MoviesList
                        onPress={(id) => navigate('MovieDetails', {
                          id,
                        })}
                        cinemaMovies={cinemaMovies}
                        navigate={navigate}
                      />
                    </>
                  )
              }

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
  getMoviesForCinema: PropTypes.func.isRequired,
  cinemaDetails: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = (state, props) => ({
  cinemaDetails: state.cinemas.filter(
    (cinema) => cinema.id === props.navigation.state.params.id,
  ),
  cinemaMovies: state.cinemaMovies,
});

export default connect(mapStateToProps, { getMoviesForCinema })(CinemaDetails);
