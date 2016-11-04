import React from 'react';
import { render } from 'react-dom';
import test from 'shared';

const App = () => <h1>{test}</h1>;

render(<App />, document.getElementById('root'));
