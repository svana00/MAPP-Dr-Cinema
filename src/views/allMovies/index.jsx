import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMovies } from '../../actions/allMoviesActions';
import MoviesList from '../../components/MoviesList';
import Header from '../../components/Header';
import Spinner from '../../components/Spinner';

class AllMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  async componentDidMount() {
    const { getMovies } = this.props;
    await getMovies();
    this.setState({ isLoading: false });
  }

  render() {
    const { navigation: { navigate }, allMovies } = this.props;
    const { isLoading } = this.state;
    return (
      <View>
        <Header
          title="Allar myndir"
        />
        {
          isLoading
            ? <Spinner />
            : (
              <>
                <MoviesList
                  onPress={() => { console.log('you pressed it!'); }}
                  cinemaMovies={allMovies}
                  navigate={navigate}
                />
              </>
            )
        }
      </View>
    );
  }
}

const mapStateToProps = ({ allMovies }) => ({
  allMovies,
});

AllMovies.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    addListener: PropTypes.func.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps, { getMovies })(AllMovies);
