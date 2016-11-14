// reducers.js
import {increment, decrement } from './actions.js';

// Réducteur simple
function counter(state = 0, action) {
    if (action.type === 'INCREMENT') {
    	return state + action.value;
    } else if (action.type === 'DECREMENT') {
     	return state - action.payload.value;
    }
    return state;
};
export default counter;

console.log(counter(undefined, {}));
console.log(counter(undefined, increment(1)));
console.log(counter(1, increment(3)));
console.log(counter(2, decrement(1)));