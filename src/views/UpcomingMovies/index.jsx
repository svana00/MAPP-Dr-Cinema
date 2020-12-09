import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUpcomingMovies } from '../../actions/upcomingMoviesActions';
import UpcomingMoviesList from '../../components/CinemaList';
import Header from '../../components/Header';

class UpcomingMovies extends React.Component {
  async componentDidMount() {
    const { getUpcomingMovies } = this.props;
    await getUpcomingMovies();
  }

  render() {
    const { navigation: { navigate }, upcomingMovies } = this.props;
    console.log("PABBI",upcomingMovies);
    return (
      <View>
        <Header
          title="Væntanlegt"
        />
        <UpcomingMoviesList
          onPress={() => { console.log('you pressed it!'); }}
          movies={upcomingMovies}
          navigate={navigate}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ upcomingMovies }) => ({
  upcomingMovies,
});

UpcomingMovies.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    addListener: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, { getUpcomingMovies })(UpcomingMovies);
