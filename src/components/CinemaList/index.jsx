import React from 'react';
import {
  View, FlatList, TextInput,
} from 'react-native';
import styles from './styles';
import CinemaListItem from '../CinemaListItem';

class CinemaList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

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
      modifiedData,
    } = this.state;
    return (
      <View style={styles.listContainer}>
        <FlatList
          numColumns={1}
          data={modifiedData}
          renderItem={({
            item: {
              id, name, phoneNumber, image, fileName,
            },
          }) => (
            <View>
              <CinemaListItem
                id={id}
                name={name}
                phoneNumber={phoneNumber}
                thumbnailPhoto={image}
                fileName={fileName}
              />
            </View>
          )}
          keyExtractor={(contact) => contact.id.toString()}
        />
      </View>
    );
  }
}

export default CinemaList;
