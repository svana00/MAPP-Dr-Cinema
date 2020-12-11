import React from 'react';
import {
  View, FlatList, TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import CinemaListItem from '../CinemaListItem';

class CinemaList extends React.Component {
  renderHeader() {
    const {
      query,
    } = this.state;
    return (
      <View
        style={{
          backgroundColor: '#fff',
          padding: 10,
          marginVertical: 10,
          borderRadius: 20,
        }}
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={query}
          onChangeText={(queryText) => this.handleSearch(queryText)}
          placeholder="Search"
          placeholderTextColor="dimgray"
          style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
        />
      </View>
    );
  }

  render() {
    const {
      cinemas, onPress,
    } = this.props;
    return (
      <View style={styles.listContainer}>
        <FlatList
          numColons={cinemas.length}
          data={cinemas}
          renderItem={({
            item: {
              id, name, address, city, phone, website, description,
            },
          }) => (
            <View>
              <CinemaListItem
                id={id}
                name={name}
                address={address}
                city={city}
                phone={phone}
                website={website}
                description={description}
                onPress={onPress}
              />
            </View>
          )}
          keyExtractor={(cinema) => cinema.id.toString()}
        />
      </View>
    );
  }
}

CinemaList.propTypes = {
  onPress: PropTypes.func.isRequired,
  cinemas: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string,
    city: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string.isRequired,
    description: PropTypes.string,
  })).isRequired,
};

const mapStateToProps = ({ cinemas }) => ({ cinemas });

export default connect(mapStateToProps)(CinemaList); // Returns a connected component
