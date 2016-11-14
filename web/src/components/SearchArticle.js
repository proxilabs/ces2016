import React from 'react';

import { connect } from 'react-redux';
import { actions, parse } from 'shared';

// Get data from store
function stateToProps(state) {
  return {
    error: state.error,
    isFetching: state.isFetching,
    url: state.url,
  };
}

function handleSubmit(event, dispatch, url) {
  event.preventDefault(); // Stop form submit
  parse(url, dispatch);
}

// TODO add loader

const SearchArticle =
    ({ url, isFetching, error, dispatch }) => (
      <form onSubmit={e => handleSubmit(e, dispatch, url)}>
        {error ? <span className="error">{error}</span> : null}
        <input type="text" autoFocus value={url} onChange={event => dispatch(actions.updateUrlValue(event.target.value))} />
        <button type="submit" disabled={isFetching || !url}>Rechercher</button>
      </form>
    );


SearchArticle.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  error: React.PropTypes.string,
  isFetching: React.PropTypes.bool,
  url: React.PropTypes.string,
};

export default connect(stateToProps)(SearchArticle);
