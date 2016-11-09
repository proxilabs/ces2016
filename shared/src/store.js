import { createStore } from 'redux';

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

/**
 * Crée le store de notre application.
 */
export default function () {
  return createStore(articleReducer);
}
