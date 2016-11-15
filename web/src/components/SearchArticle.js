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

const SearchArticle =
    ({ url, isFetching, error, dispatch }) => (
      <div className="search">
        <form onSubmit={e => handleSubmit(e, dispatch, url)} className="search__form">
          <input
            type="text"
            className="search__input"
            autoFocus
            value={url}
            onChange={event => dispatch(actions.updateUrlValue(event.target.value))}
          />
          <button className="search__button" type="submit" disabled={isFetching || !url}>
            Rechercher
          </button>
        </form>
        {error ? <span className="search__error">{error}</span> : null}
      </div>
    );


SearchArticle.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  error: React.PropTypes.string,
  isFetching: React.PropTypes.bool,
  url: React.PropTypes.string,
};

export default connect(stateToProps)(SearchArticle);
