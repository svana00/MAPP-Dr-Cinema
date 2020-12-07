import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
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

export default CinemaListItem;
