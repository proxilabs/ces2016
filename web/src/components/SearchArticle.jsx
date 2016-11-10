import React from 'react';

import { connect } from 'react-redux';
import { fetchArticlesSuccess, fetchArticlesError, updateUrlValue, parse } from 'shared';

// TODO add error handling
// TODO add submit handling

// Get data from store
function stateToProps(state) {
  return {
    url: state.url,
  };
}

const SearchArticle =
    ({ url, dispatch }) => (
      <form
        onSubmit={
          parse(url)
          .then(feed => dispatch(fetchArticlesSuccess(feed)))
          .catch(error => fetchArticlesError(error))
        }
      >

        <input type="text" value={url} onChange={event => dispatch(updateUrlValue(event))} />

        <button type="submit">Rechercher</button>

      </form>

    );


SearchArticle.propTypes = {
  url: React.PropTypes.string,
  dispatch: React.PropTypes.func.isRequired,
};

export default connect(stateToProps)(SearchArticle);
