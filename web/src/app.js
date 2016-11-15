import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import { createStore } from 'shared';

import App from './components/App';
import Home from './components/Home';
import ArticleDetail from './components/ArticleDetail';
import NoMatch from './components/NoMatch';

import './assets/scss/app.scss';

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

if (module.hot) {
  module.hot.accept();
}
