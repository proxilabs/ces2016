import React, { Component } from 'react';

class HeroClicker extends Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  incrementCounter() {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    return (
      <div>
        <h2>{this.state.counter}</h2>
        <button onClick={() => this.incrementCounter()}>Click click click!</button>
      </div>
    );
  }
}

export default HeroClicker;