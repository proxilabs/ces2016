import React from 'react';

import { connect } from 'react-redux';
import { actions, parse } from 'shared';

import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

// Get data from store
function mapStateToProps(state) {
  return {
    error: state.error,
    isFetching: state.isFetching,
    url: state.url,
  };
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginRight: 16,
  },
  input: {
    height: 52,
    fontSize: 16,
  },
  error: {
    backgroundColor: '#F5F5F5',
    color: '#D50000',
    padding: 8,
  },
});

// TODO add loader
const SearchArticle =
    ({ url, isFetching, error, dispatch }) => (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          returnKeyType="done"
          placeholder="Url du flux"
          value={url}
          autoCorrect={false}
          onChange={event => dispatch(actions.updateUrlValue(event.nativeEvent.text))}
        />
        <Button
          onPress={() => parse(url, dispatch)} title="Rechercher" disabled={isFetching || !url}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>
    );


SearchArticle.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  error: React.PropTypes.string,
  isFetching: React.PropTypes.bool,
  url: React.PropTypes.string,
};

export default connect(mapStateToProps)(SearchArticle);
