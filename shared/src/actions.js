import * as actions from './actionTypes';

export function fetchArticlesRequest() {
  return {
    type: actions.FETCH_ARTICLES_REQUEST,
  };
}


export function fetchArticlesSuccess(items) {
  return {
    type: actions.FETCH_ARTICLES_SUCCESS,
    items,
  };
}

export function fetchArticlesError(error) {
  return {
    type: actions.FETCH_ARTICLES_ERROR,
    error,
  };
}

export function updateUrlValue(url) {
  return {
    type: actions.UPDATE_URL_VALUE,
    url,
  };
}
