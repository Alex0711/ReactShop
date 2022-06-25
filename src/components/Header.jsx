import React, { useState, useContext } from 'react';
import appContext from '@context/appContext';

import '../styles/Header.scss';
import menu from "@icons/icon_menu.svg";
import Menu from "@components/Menu"
import yardSale from "@logos/logo_yard_sale.svg"
import cart from "@icons/icon_shopping_cart.svg"
import MyOrder from '@containers/MyOrder'; 

const Header = () => {
	const { state } = useContext(appContext)

	const cartItems = (items) =>{
		if (items > 0 && items < 10) {
			return <div> {items} </div>
		}
		if (items === 0) {
			return null
		}
		if (items > 9) {
			return <div> +9 </div>
		}
	}

	const [toggle, setToggle] = useState(false);
	const handleToggle = () => {
		setToggle(!toggle);
	}

	const [toggleOrders, setToggleOrders] = useState(false);

	return (
		<nav>
			<img src= {menu} alt="menu" className="menu" />
			<div className="navbar-left">
				<img src= {yardSale} alt="logo" className="nav-logo" />
				<ul>
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
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
						alex.senger@hotmail.com
					</li>
					<li 
					className="navbar-shopping-cart"
					onClick={() => setToggleOrders(!toggleOrders)}
					>
						<img src= {cart} alt="shopping cart" />
						{cartItems(state.cart.length)}
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
			{toggleOrders && <MyOrder />}
		</nav>
	);
}

export default Header;