import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getMovies } from '../../actions/allMoviesActions';
import DetailedMoviesList from '../../components/DetailedMoviesList';
import Header from '../../components/Header';
import Spinner from '../../components/Spinner';
import styles from './styles';

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
      <View style={styles.listContainer}>
        <Header
          title="Bíómyndir í sýningu"
        />
        {
          isLoading
            ? <Spinner />
            : (
              <>
                <DetailedMoviesList
                  onPress={(id) => navigate('MoreDetailedDetailView', {
                    id,
                  })}
                  movies={allMovies}
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
