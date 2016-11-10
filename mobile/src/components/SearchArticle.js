import React from 'react';

import { connect } from 'react-redux';
import { actions, parse } from 'shared';

import {
    Button,
    TextInput,
    View
} from 'react-native';

// Get data from store
function mapStateToProps(state) {
  return {
    error: state.error,
    isFetching: state.isFetching,
    url: state.url,
  };
}

// TODO add loader
const SearchArticle =
    ({ url, isFetching, error, dispatch }) => (
        <View>
            {error ? <Text>{error}</Text> : null}
            <TextInput returnKeyType="next" value={url} onChange={event => dispatch(actions.updateUrlValue(event.nativeEvent.text))}/>
            <Button onPress={() =>  parse(url, dispatch)} title="Rechercher" disabled={isFetching || !url }/>
        </View>
    );


SearchArticle.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  error: React.PropTypes.string,
  isFetching: React.PropTypes.bool,
  url: React.PropTypes.string,
};

export default connect(mapStateToProps)(SearchArticle);
