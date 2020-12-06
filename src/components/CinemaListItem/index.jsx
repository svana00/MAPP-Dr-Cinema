import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from './styles';

const ContactListItem = ({
  navigation: { navigate },
}) => (
  <TouchableOpacity
    onPress={() => {
      navigate('DetailedView', {
      });
    }}
  >
    {
  }
    <View style={[styles.listItem, { opacity: 1 }]}>
      <Text style={styles.title}>ListItem</Text>
    </View>
  </TouchableOpacity>
);

ContactListItem.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(ContactListItem);
