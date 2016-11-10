import React from 'react';
import { createStore } from 'redux';

const aReducer = (state, action) => {
  return state;
}

// Le store représente l'état de notre application
const store = createStore(aReducer);

// Il peut être considéré comme un simple objet javascript dans lequel tout est possible.
// Néanmoins, il possède des méthodes particulières
console.info(store.getState); // Pour récupérer l'état du store à cet instant précis
console.info(store.dispatch); // Pour dispatcher une action dans le store 
console.info(store.subscribe); // Permet de s'abonner pour les changements du store

const ReduxComponent = () => (
  <div />
)

export default ReduxComponent;