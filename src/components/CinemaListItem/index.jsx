import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { List } from 'react-native-paper';
import styles from './styles';

const CinemaListItem = ({
  id, name, address, city, description, phone, website, navigation,
}) => (
  <TouchableOpacity
    onPress={() => navigation.navigate('CinemaDetails', {
      name: {
        id,
        cinemaName: name,
        address,
        city,
        description,
        phone,
        website,
      },
      navigate: navigation.navigate,
    })}
  >
    {
  }
    <View style={[styles.listItem, { opacity: 1 }]}>
      <View style={styles.textBox}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.website}>{website}</Text>
      </View>
      <View>
        <TouchableOpacity>
          <List.Icon icon="arrow-right" />
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
);

CinemaListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  address: PropTypes.string,
  city: PropTypes.string.isRequired,
  description: PropTypes.string,
  phone: PropTypes.string,
  website: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }),
};

CinemaListItem.defaultProps = {
  address: null,
  description: null,
  phone: null,
  navigation: null,
};

export default CinemaListItem;
