import React from 'react';
import Logo from '../assets/img/pizza-logo.svg';

const HeaderLogo = () => {
    return(
        <div className="header__logo">
            <img width="38" src={Logo} alt="Pizza logo" />
            <div>
                <h1>React Pizza</h1>
                <p>самая вкусная пицца во вселенной</p>
            </div>
        </div>
    )
}

export default HeaderLogo;