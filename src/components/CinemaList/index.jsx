import React from 'react';
import {
  View, FlatList, TextInput,
} from 'react-native';
import { connect } from 'react-redux';
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
          style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
        />
      </View>
    );
  }

  render() {
    const {
      cinemas,
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
              />
            </View>
          )}
          keyExtractor={(cinema) => cinema.id.toString()}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ cinemas }) => ({ cinemas });

export default connect(mapStateToProps)(CinemaList); // Returns a connected component
