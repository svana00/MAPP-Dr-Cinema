import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUpcomingMovies } from '../../actions/upcomingMoviesActions';
import CinemaList from '../../components/CinemaList';
import Header from '../../components/Header';

class UpcomingMovies extends React.Component {
  async componentDidMount() {
    const { getUpcomingMovies } = this.props;
    await getUpcomingMovies();
  }

  render() {
    const { navigation: { navigate }, movies } = this.props;
    return (
      <View>
        <Header
          title="Væntanlegt"
        />
      </View>
    );
  }
}

const mapStateToProps = ({ movies }) => ({
  movies,
});

UpcomingMovies.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    addListener: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, { getUpcomingMovies })(UpcomingMovies);
