import { createStore } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import article from './reducers';

const composeEnhancers = composeWithDevTools({ realtime: true, port: 9001 });

/**
 * Crée le store de notre application.
 */
export default function () {
  return createStore(article, composeEnhancers());
}
