import React from 'react';
import { render } from 'react-dom';
import HeroClicker from './HeroClicker';
import HelloWorld from './HelloWorld';

const App = () => (
  <div>
    <h1>Exemples</h1>
    <HeroClicker />
    <HelloWorld />
  </div>
)

render(<App />, document.getElementById('root'));

if(module.hot) {
  module.hot.accept();
}