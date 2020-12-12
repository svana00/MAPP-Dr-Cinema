import React from 'react';
import {
  View, FlatList, Text, ImageBackground,
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
        <View style={styles.container}>
          <ImageBackground source={{ uri: movieDetails[0].image }} imageStyle={{ resizeMode: 'cover' }} style={{ width: '100%', height: '80%' }}>
            <View style={styles.background}>
              <View style={styles.Header}>
                <Text style={styles.title}>{movieDetails[0].name}</Text>
              </View>
              <View style={styles.content}>
                <View style={styles.genres}>
                  <Text>{ movieDetails[0].genres.replace(/\n/g, ' / ') }</Text>
                </View>
                <View style={styles.facts}>
                  {movieDetails[0].duration !== 'N/A' ? (
                    <Text>
                      {movieDetails[0].duration}
                      {' mín  |  '}
                      {movieDetails[0].releaseYear}
                    </Text>
                  )
                    : (
                      <Text>{movieDetails[0].releaseYear}</Text>
                    )}
                </View>
              </View>

              <View style={styles.secondaryFacts}>
                <Text style={styles.description}>
                  {'\n'}
                  {movieDetails[0].plot}
                </Text>
                <View>
                  <Text style={styles.heading}>Kaupa Miða</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
    )}
      ListFooterComponent={(
        <View style={styles.whiteBox} />
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
    showtimes: PropTypes.arrayOf(PropTypes.shape({
      schedule: PropTypes.arrayOf(PropTypes.shape({
        purchase_url: PropTypes.string.isRequired,
        time: PropTypes.string.isRequired,
      })).isRequired,
    })).isRequired,
  })).isRequired,
};

const mapStateToProps = ({ showtimes }) => ({ showtimes });

export default connect(mapStateToProps)(ShowtimeList);
