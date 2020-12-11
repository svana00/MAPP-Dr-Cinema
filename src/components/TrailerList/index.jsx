import React from 'react';
import {
  View, FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import TrailerListItem from '../TrailerListItem';

const TrailerList = ({ trailerUrls, onPress }) => (
  <View>
    <FlatList
      numColumns={2}
      data={trailerUrls}
      renderItem={({
        item: {
          url,
        },
      }) => (
        <View>
          <TrailerListItem
            url={url}
          />
        </View>
      )}
    />
  </View>
);

TrailerList.propTypes = {
  trailerUrls: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
  })).isRequired,
};

export default TrailerList;
