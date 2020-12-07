import React from 'react';
import {
  View, FlatList, TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import ShowtimeListItem from '../ShowtimeListItem';

class ShowtimeList extends React.Component {
  render() {
    const {
      showtimes, onPress,
    } = this.props;
    return (
      <View style={styles.listContainer}>
        <FlatList
          numColons= 1
          data={showtimes}
          renderItem={({
            item: { purchase_url, time
            },
          }) => (
            <View>
              <ShowtimeListItem
                url={purchase_url}
                time={time}
                onPress={onPress}
              />
            </View>
          )}
          keyExtractor={(time) => `${item.time}` }
        />
      </View>
    );
  }
}

CinemaList.propTypes = {
  onPress: PropTypes.func.isRequired,
};

const mapStateToProps = ({ showtimes }) => ({ showtimes });

export default connect(mapStateToProps)(ShowtimeList); // Returns a connected component
