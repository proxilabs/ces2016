import React from 'react';

class Button2 extends React.Component {
    constructor() {
        super();
        this.state = { counter: 0 };
    }

    incrementCounter() {
        this.setState({ counter: this.state.counter + 1 });
    }

    render() {
        return (
            <button onClick={() => this.incrementCounter()}>
                {this.props.text} ({this.state.counter})
            </button>
        );
    }
}

export default Button2;