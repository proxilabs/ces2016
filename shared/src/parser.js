import fetch from 'isomorphic-fetch';

import { actions } from './actions';

/**
 * Parse un flux RSS à l'URL spécifiée.
 */
export default function (url, dispatch) {
  return new Promise(() => {
    console.info(`Fetching feeds for ${url}`);

    fetch(`http://localhost:3001/?url=${url}`)
      .then(r => r.json())
      .then(feed => dispatch(actions.fetchArticlesSuccess(feed)))
      .catch(error => dispatch(actions.fetchArticlesError(error)));
  });
}
