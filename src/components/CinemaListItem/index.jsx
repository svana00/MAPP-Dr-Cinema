import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { List } from 'react-native-paper';
import styles from './styles';

const CinemaListItem = ({
  id, name, address, city, description, phone, website, onPress,
}) => (
  <TouchableOpacity
    onPress={() => onPress(id, name, description, address, phone, website)}
  >
    {
  }
    <View style={[styles.listItem, { opacity: 1 }]}>
      <View style={styles.textBox}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.website}>{website}</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => onPress(id, name, description, address, city, phone, website)}
        >
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
  onPress: PropTypes.func.isRequired,
};

CinemaListItem.defaultProps = {
  address: null,
  description: null,
  phone: null,
};

export default CinemaListItem;
