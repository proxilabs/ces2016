import * as actions from './actionTypes';

const initialState = {
  articles: [],
  error: undefined,
  isFetching: false,
  url: '',
};

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        articles: action.feed.items,
        error: undefined,
        isFetching: false,
      };
    case actions.FETCH_ARTICLES_ERROR:
      return {
        ...state,
        error: action.error,
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

export default articleReducer;
