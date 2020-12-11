import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const Header = ({
  title, otherTitle,
}) => (
  <View styleName="horizontal" style={styles.toolbar}>
    <View style={styles.toolbarAction}>
      <Text style={styles.headerText}>{title}</Text>
      {
        otherTitle
          ? <Text style={styles.underHeading}>{otherTitle}</Text>
          : (null)
      }
    </View>
  </View>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  otherTitle: PropTypes.string.isRequired,
};

export default Header;
