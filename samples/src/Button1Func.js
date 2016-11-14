import React from 'react';

function Button1Func(props) {
    return (
        <button onClick={props.onClick}>
            {props.text}
        </button>
    ); 
}

export default Button1Func;