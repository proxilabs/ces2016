import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { createStore } from 'shared';

import App from './components/App.jsx';
import Home from './components/Home.jsx';
import ArticleDetail from './components/ArticleDetail.jsx';
import NoMatch from './components/NoMatch.jsx';

const store = createStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/article/:articleId" component={ArticleDetail} />
        <Route path="*" component={NoMatch} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
