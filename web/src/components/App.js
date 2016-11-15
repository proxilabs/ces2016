import React from 'react';

const App = ({ children }) => (
  <div className="app">
    {children}
  </div>
);

App.propTypes = {
  children: React.PropTypes.element,
};

export default App;
