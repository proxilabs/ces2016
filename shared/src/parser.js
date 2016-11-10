import {
  fetchArticlesRequest,
  fetchArticlesSuccess,
  fetchArticlesError,
} from './actions';

/**
 * Parse un flux RSS à l'URL spécifiée.
 */
export default function (url, dispatch) {
  dispatch(fetchArticlesRequest());
  return new Promise(() => {
    console.info(`Fetching feeds for ${url}`);

    // eslint-disable-next-line no-undef
    fetch(`http://localhost:3001/?url=${url}`)
      .then(r => r.json())
      .then(feed => dispatch(fetchArticlesSuccess(feed)))
      .catch(error => dispatch(fetchArticlesError(error)));
  });
}
