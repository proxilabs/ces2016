import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { StyleSheet, TextInput } from 'react-native';
import { actions, parse } from 'shared';

// Get data from store
function mapStateToProps(state) {
  return {
    error: state.error,
    isFetching: state.isFetching,
    url: state.url,
  };
}

const styles = StyleSheet.create({
  navbar: {
    backgroundColor: '#4CAF50',
    height: 56,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  input: {
    color: 'white',
    fontSize: 16,
    flex: 1,
  },
});

const SearchNavBar = ({ url, dispatch }) => (
  <Icon.ToolbarAndroid
    style={styles.navbar}
    actions={[
      {
        title: 'Rechercher',
        iconName: 'search',
        show: 'always',
      },
    ]}
    titleColor="white"
    onActionSelected={() => parse(url, dispatch)}
  >
    <TextInput
      underlineColorAndroid="transparent"
      style={styles.input}
      placeholderTextColor="rgba(255,255,255,0.54)"
      returnKeyType="done"
      placeholder="Url du flux"
      value={url}
      autoCorrect={false}
      onChange={event => dispatch(actions.updateUrlValue(event.nativeEvent.text))}
    />
  </Icon.ToolbarAndroid>
);

SearchNavBar.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  url: React.PropTypes.string,
};

export default connect(mapStateToProps)(SearchNavBar);
