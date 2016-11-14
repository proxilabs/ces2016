import { createStore } from 'redux';

// Réducteur exemple
const counter = function(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT': 
            return state - 1;
        default: 
            return state; 
    }
}

// On crée le store avec un reducer
const store = createStore(counter);

// Log l'état initial
console.log(store.getState());

// On log chaque changement d'état
let unsubscribe = store.subscribe(() => // On log chaque changement d'état
  console.log(store.getState())
);

store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'INCREMENT'})
store.dispatch({type: 'DECREMENT'})

// On arrête d'écouter les changements du store
unsubscribe();

