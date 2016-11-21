import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#4CAF50',
    height: 56,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
});

const DetailNavBar = () => (
  <Icon.ToolbarAndroid
    onIconClicked={Actions.pop}
    style={styles.navbar}
    title="Article"
    titleColor="white"
    navIconName="arrow-back"
  />
);

export default DetailNavBar;
