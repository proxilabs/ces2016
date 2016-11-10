import * as actions from './actionTypes';

const initialState = {
  articles: [],
  error: undefined,
  isFetching: false,
  url: '',
};

const article = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_ARTICLES_REQUEST:
      return {
        ...state,
        error: undefined,
        isFetching: true,
      };
    case actions.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.feed.items,
        isFetching: false,
      };
    case actions.FETCH_ARTICLES_ERROR:
      return {
        ...state,
        error: action.error.message,
        isFetching: false,
      };
    case actions.UPDATE_URL_VALUE:
      return {
        ...state,
        url: action.url,
      };
    default:
      return state;
  }
};

export default article;
