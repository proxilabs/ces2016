import React from 'react';

class Button1 extends React.Component {
    render() {
        return (
            <button onClick={() => alert("T'es tendue!")}>
                Un bouton
            </button>
        );
    }
}

export default Button1;