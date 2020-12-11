import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUpcomingMovies } from '../../actions/upcomingMoviesActions';
import UpcomingMoviesList from '../../components/UpcomingMoviesList';
import Header from '../../components/Header';
import Spinner from '../../components/Spinner';

class UpcomingMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  async componentDidMount() {
    const { getUpcomingMovies } = this.props;
    await getUpcomingMovies();
    this.setState({ isLoading: false });
  }

  render() {
    const { navigation: { navigate }, upcomingMovies } = this.props;
    const { isLoading } = this.state;
    return (
      <View>
        <Header
          title="Væntanlegt í bíó"
        />
        {
          isLoading
            ? <Spinner />
            : (
              <>
                <UpcomingMoviesList
                  onPress={(id, name, image, releaseDate, duration, trailers) => navigate('UpcomingMoviesTrailer', {
                    id, name, image, releaseDate, duration, trailers,
                  })}
                  movies={upcomingMovies}
                  navigate={navigate}
                />
              </>
            )
        }
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
  getUpcomingMovies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getUpcomingMovies })(UpcomingMovies);
