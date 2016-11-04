import { createStore } from 'redux';

const dummyReducer = (state = {}) => state;

/**
 * Crée le store de notre application.
 */
export default function () {
  return createStore(dummyReducer);
}
