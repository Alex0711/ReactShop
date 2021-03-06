import React, { useContext } from 'react';
import OrderItem from '../components/OrdersItem';
import AppContext from '@context/appContext';
import useSumTotal from '../hooks/useSumTotal.js'
import '@styles/MyOrder.scss';
import arrow from '@icons/flechita.svg';

const MyOrder = () => {
	const { state } = useContext(AppContext);
	 
	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`} />
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>$ {useSumTotal()} </p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;