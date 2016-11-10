import * as actions from './actionTypes';


export function fetchArticlesSuccess(feed) {
  return {
    type: actions.FETCH_ARTICLES_SUCCESS,
    feed,
  };
}

export function fetchArticlesError(error) {
  return {
    type: actions.FETCH_ARTICLES_ERROR,
    error,
  };
}

export function updateUrlValue(event) {
  return {
    url: event.target.value,
  };
}
