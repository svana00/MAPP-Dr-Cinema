import React from 'react';
import {
  View, FlatList, Text
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './styles';
import ShowtimeListItem from '../ShowtimeListItem';

const ShowtimeList = ({
  movieDetails, onPress,
}) => (
  <View style={styles.listContainer}>
    <FlatList
      numColons={1}
      data={movieDetails[0].showtimes.schedule}
      renderItem={({
        item: { purchase_url, time },
      }) => (
        <View>
          <ShowtimeListItem
            url={purchase_url}
            time={time}
            onPress={onPress}
          />
        </View>
      )}
      keyExtractor={(item) => `${item.time}`}
    />
  </View>
);

ShowtimeList.propTypes = {
  onPress: PropTypes.func.isRequired,
  movieDetails: PropTypes.string.isRequired,
};

const mapStateToProps = ({ showtimes }) => ({ showtimes });

export default connect(mapStateToProps)(ShowtimeList); // Returns a connected component
