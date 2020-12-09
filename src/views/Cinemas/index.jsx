import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCinemas } from '../../actions/cinemasActions';
import CinemaList from '../../components/CinemaList';
import Header from '../../components/Header';
import Spinner from '../../components/Spinner';

class Cinemas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  async componentDidMount() {
    const { getCinemas } = this.props;
    await getCinemas();
    this.setState({ isLoading: false });
  }

  render() {
    const { navigation: { navigate }, cinemas } = this.props;
    const { isLoading } = this.state;
    return (
      <View>
        <Header
          title="Kvikmyndahús"
        />
        {
          isLoading
            ? <Spinner />
            : (
              <>
                <CinemaList
                  onPress={(id, name, description, address, city, phone, website) => navigate('CinemaDetails', {
                    id, name, description, address, city, phone, website,
                  })}
                  cinemas={cinemas}
                  navigate={navigate}
                />
              </>
            )
        }

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
