import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCinemas } from '../../actions/cinemasActions';
import CinemaList from '../../components/CinemaList';

class Cinemas extends React.Component {
  async componentDidMount() {
    const { getCinemas } = this.props;
    await getCinemas();
  }

  render() {
    const { navigation, cinemas } = this.props;
    return (
      <View>
        <CinemaList
          navigation={navigation}
          cinemas={cinemas}
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
