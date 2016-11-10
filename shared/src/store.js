import { createStore } from 'redux';

import article from './reducers';

/**
 * Crée le store de notre application.
 */
export default function () {
  return createStore(article);
}
