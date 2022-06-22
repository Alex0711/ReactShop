import React from 'react';
import '../styles/OrdersItem.scss'

const OrdersItem = () => {
  return (
    <div class="my-order-content">
      <p>
        <span class="date">04.09.2022</span>
        <span class="articles">6 articles</span>
      </p>
      <div class="check">
        <p class="check-number">$ 560</p>
        <img class="arrow" src="./icons/flechita.svg" alt="arrow" />
      </div>
    </div>
  )
}

export default OrdersItem;