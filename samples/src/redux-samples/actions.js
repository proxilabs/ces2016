// actions.js
export const DECREMENT = 'DECREMENT';
export const INCREMENT = 'INCREMENT';


export function increment(value) {
  return {
    type: INCREMENT,
    value,
  };
};


export function decrement(value) {
  return {
    type: DECREMENT,
    payload: {
      value,
    },
  };
};
