import { createStore } from 'redux';

<<<<<<< HEAD
import { articleReducer } from './reducers';
=======
const initialState = {
  articles: [],
  error: undefined,
  url: '',
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_ARTICLES_SUCCESS':
      return {
        ...state,
        articles: action.feed.items,
      };
    case 'SEARCH_ARTICLES_ERROR':
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};
>>>>>>> baa70e9fd5bb6c4052c9268bc63c43139d310fd8

/**
 * Crée le store de notre application.
 */
export default function () {
  return createStore(articleReducer);
}
