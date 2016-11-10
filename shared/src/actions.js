import * as actions from './actionTypes';

export function fetchArticlesRequest() {
  return {
    type: actions.FETCH_ARTICLES_REQUEST,
  };
}


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
    type: actions.UPDATE_URL_VALUE,
    url: event.target.value,
  };
}
