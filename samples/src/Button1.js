import React from 'react';

class Button1 extends React.Component {
  componentWillMount() {
    console.info('A button has appeared');
  }

  componentWillUnmount() {
    console.info('A button has disappeared');
  }

  render() {
    return (
      <button onClick={() => alert("T'es tendue!")}>
                Un bouton
            </button>
    );
  }
}

export default Button1;
