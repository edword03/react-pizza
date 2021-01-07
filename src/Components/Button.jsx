import React, { Children } from 'react';

const Button =(props) => {
    console.log(props);
    return(
        <button 
            className={`button ${props.outline ? 'button--outline' : 'button--cart'}`}>
                {props.children}
        </button>
    )
}

export default Button;