import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUpcomingMovies } from '../../actions/moviesActions';
import CinemaList from '../../components/CinemaList';
import Header from '../../components/Header';

class Cinemas extends React.Component {
  async componentDidMount() {
    const { getUpcomingMovies } = this.props;
    await getUpcomingMovies();
  }

  render() {
    const { navigation: { navigate }, movies } = this.props;
    return (
      <View>
        <Header
          title="Kvikmyndahús"
        />
        <CinemaList
          onPress={(id, name, description, address, phone, website) => navigate('UpcomingMovieDetails', {
            id, name, description, address, phone, website,
          })}
          cinemas={cinemas}
          navigate={navigate}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ cinemas }) => ({
  cinemas,
});

Cinemas.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    addListener: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, { getCinemas })(Cinemas);
