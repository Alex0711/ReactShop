import React from 'react';
import '../styles/Header.scss';

const Header = () => {
    return(
        <nav className="main-nav">
        <div className="menu">
            <img src="./icons/icon_menu.svg" alt="menu" />
        </div>
        <div className="nav-left">
            <img className="logo" src="./logos/logo_yard_sale.svg" alt="YARDSale" />
            <ul className="options">
                <li>
                <a href="/">All</a>
                </li>
                <li>
                <a href="/">Clothes</a>
                </li>
                <li>
                <a href="/">Electronics</a>
                </li>
                <li>
                <a href="/">Furnitures</a>
                </li>
                <li>
                <a href="/">Toys</a>
                </li>
                <li>
                <a href="/">Others</a>
                </li>
            </ul>
        </div>
        <div className="nav-right">
            <p className="email">alex.senger@hotmail.com</p>
            <img src="./icons/icon_shopping_cart.svg" alt="cart" />
            <p className="items">2</p>
        </div>
    </nav>
    )
}

export default Header;