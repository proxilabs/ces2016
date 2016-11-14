// app.js
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import counter from './reducers.js';
import { increment, decrement } from './actions.js';
import Button from './Button.js';

const store = createStore(counter); // On crée le store avec un reducer
console.log(store.getState()); // 0

let unsubscribe = store.subscribe(() => // On log chaque changement d'état
  console.log(store.getState())
);

store.dispatch(increment(2)); // 2
store.dispatch(decrement(1)); // 1
store.dispatch(decrement(1)); // 0

export default () => (
  <Provider store={store}>
    <Button />
  </Provider>
);

unsubscribe(); // On arrête d'écouter les changements du store