import { createStore } from 'redux';

import { articleReducer } from './reducers';

/**
 * Crée le store de notre application.
 */
export default function () {
  return createStore(articleReducer);
}
