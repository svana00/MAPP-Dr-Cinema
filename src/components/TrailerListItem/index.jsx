import React from 'react';
import {
  View, Text, TouchableOpacity, Image,
} from 'react-native';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';
import styles from './styles';

const TrailerListItem = ({
  url,
}) => (
  <View style={styles.trailer}>
    <WebView
      style={{ marginTop: 20, width: 320, height: 230 }}
      javaScriptEnabled
      domStorageEnabled
      source={{ uri: url }}
    />
  </View>
);

TrailerListItem.propTypes = {
  url: PropTypes.string.isRequired,
};

export default TrailerListItem;
