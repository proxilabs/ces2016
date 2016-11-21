import React from 'react';
import { connect } from 'react-redux';
import { TextInput, StyleSheet } from 'react-native';
import { NavBar } from 'react-native-router-flux';
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
  input: {
    height: 36,
    marginLeft: 8,
    marginTop: 24,
    marginRight: 48,
  },
});

const SearchNavBar = ({ dispatch, url, ...props }) => (
  <NavBar
    {...props}
    renderTitle={() => <TextInput
      underlineColorAndroid="transparent"
      style={styles.input}
      placeholderTextColor="rgba(0,0,0,0.54)"
      returnKeyType="done"
      placeholder="Url du flux"
      value={url}
      autoCorrect={false}
      onChange={event => dispatch(actions.updateUrlValue(event.nativeEvent.text))}
    />}
    rightButtonStyle={{ width: 48 }}
    getRightTitle={() => 'Go'}
    onRight={() => parse(url, dispatch)}
  />
);

SearchNavBar.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  url: React.PropTypes.string,
};

export default connect(mapStateToProps)(SearchNavBar);
