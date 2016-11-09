import React from 'react';

import { connect } from 'react-redux';

import { parse } from 'shared';

// TODO add error handling
// TODO add submit handling

// Get data from store
function stateToProps(state) {
  return {
    url: state.url,
  };
}

function fetchSuccess(feed) {
  return {
    type: 'SEARCH_ARTICLES_SUCCESS',
    feed,
  };
}

function fetchError(error) {
  return {
    type: 'SEARCH_ARTICLES_ERROR',
    error,
  };
}

// TODO add onValueChanged to input
const SearchArticle =
    ({ url, dispatch }) => (
      <form onSubmit={parse(url).then(feed => dispatch(fetchSuccess(feed))).catch(error => fetchError(error))}>
        <input type="text" value={url} onValueChanged="" />
        <button type="submit">Rechercher</button>
      </form>
    );

export default connect(stateToProps)(SearchArticle);
