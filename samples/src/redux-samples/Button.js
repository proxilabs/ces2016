// Button.js
import React from 'react';
import { connect } from 'react-redux';

import { increment } from './actions';

function mapStateToProps(state, props) {
  return {
    text: state
  }
};

export default connect(mapStateToProps)(function Button(props) {
    return (
        <button onClick={() => props.dispatch(increment(1))}>
            Cliqué {props.text} fois
        </button>
    ); 
});