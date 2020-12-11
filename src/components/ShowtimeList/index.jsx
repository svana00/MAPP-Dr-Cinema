import React from 'react';
import {
  View, FlatList, Text, Image,
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
      ListHeaderComponent={(
        <>
          <View style={{ alignItems: 'center' }}>
            <Image source={{ uri: movieDetails[0].image }} style={styles.thumbnailImage} resizeMode="cover" />
          </View>
          <View>
            <Text style={styles.description}>
              {'\n'}
              {movieDetails[0].plot}
            </Text>
            <Text style={styles.heading}>Lengd</Text>
            <Text style={styles.info}>
              {movieDetails[0].duration}
              {' '}
              mínútur
              {'\n'}
            </Text>
            <Text style={styles.heading}>Útgáfuár</Text>
            <Text style={styles.info}>
              {movieDetails[0].releaseYear}
              {'\n'}
            </Text>
            <Text style={styles.heading}>Tegund</Text>
            <Text style={styles.description}>
              {movieDetails[0].genres}
              {' '}
            </Text>
            <Text style={styles.heading}>Kaupa miða</Text>
          </View>
        </>
    )}
      numColumns={3}
      data={movieDetails[0].showtimes[0].schedule}
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
  movieDetails: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    plot: PropTypes.string,
    duration: PropTypes.number.isRequired,
    releaseYear: PropTypes.string.isRequired,
    genres: PropTypes.string.isRequired,
  })).isRequired,
};

ShowtimeList.defaultProps = {
  plot: '',
};

const mapStateToProps = ({ showtimes }) => ({ showtimes });

export default connect(mapStateToProps)(ShowtimeList);
