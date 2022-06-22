import React from 'react';
import '../styles/Checkout.scss'
import CheckoutItem from '../components/CheckoutItem';

const Checkout = ()=> {
  return(
    <main class="my-order"> 
      <h1 class="my-order-title">My order</h1>
      <div class="my-order-container">
        <div class="my-order-content">
          <p>
            <span class="date">04.09.2022</span>
            <span class="articles">6 articles</span>
          </p>
          <p class="check">$ 560</p>
        </div>
      </div>
      <div class="shopping-cart">
        <CheckoutItem />
        <CheckoutItem />
        <CheckoutItem />
      </div>
    </main>
  )
}

export default Checkout