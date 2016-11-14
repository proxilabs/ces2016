import React from 'react';
import { render } from 'react-dom';
import HeroClicker from './HeroClicker';
import HelloWorld from './HelloWorld';
import ReduxComponent from './ReduxSample';

const App = () => (
  <div>
    <h1>Exemples</h1>
    <HeroClicker />
    <HelloWorld />
    <ReduxComponent />
  </div>
);

render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
