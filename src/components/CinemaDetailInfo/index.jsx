import React from 'react';
import {
  ScrollView, View, Text, FlatList,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const CinemaDetailInfo = ({ cinemaDetails }) => (
  <ScrollView>
    <FlatList
      data={cinemaDetails}
      extraData={cinemaDetails}
      style={styles.container}
      renderItem={({
        item: {
          name, description, address, phone, website, city,
        },
      }) => (
        <View>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.description}>{description}</Text>
          <Text style={styles.text}>
            {address}
            ,
            {city}
          </Text>
          <Text style={styles.text}>{phone}</Text>
          <Text style={styles.text}>{website}</Text>
        </View>
      )}
      keyExtractor={(cinemaDetail) => cinemaDetail.id}
    />
  </ScrollView>
);

CinemaDetailInfo.propTypes = {
  cinemaDetails: PropTypes.func.isRequired,
};

export default CinemaDetailInfo;
