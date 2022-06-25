import React, { useState, useContext } from 'react';
import appContext from '@context/appContext';
import '../styles/Checkout.scss'
import CheckoutItem from '../components/CheckoutItem';

const Checkout = ()=> {
  return(
    <main className="my-order"> 
      <h1 className="my-order-title">My order</h1>
      <div className="my-order-container">
        <div className="my-order-content">
          <p>
            <span className="date">04.09.2022</span>
            <span className="articles"> {state.cart.length} </span>
          </p>
          <p className="check">$ 560</p>
        </div>
      </div>
      <div className="shopping-cart">
        <CheckoutItem />
        <CheckoutItem />
        <CheckoutItem />
      </div>
    </main>
  )
}

export default Checkout