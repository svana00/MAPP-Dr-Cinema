import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCinemas } from '../../actions/cinemasActions';
import CinemaList from '../../components/CinemaList';
import Header from '../../components/Header';

class Cinemas extends React.Component {
  async componentDidMount() {
    const { getCinemas } = this.props;
    await getCinemas();
  }

  render() {
    const { navigation: { navigate }, cinemas } = this.props;
    return (
      <View>
        <Header
          title="Kvikmyndahús"
        />
        <CinemaList
          onPress={(id, name, description, address, phone, website) => navigate('CinemaDetails', {
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
