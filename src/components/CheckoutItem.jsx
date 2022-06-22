import React from 'react';
import '../styles/CheckoutItem.scss'

const CheckoutItem = () => {
  return(
    <div>
      <figure class="product">
        <div>
          <img src="./imgs/bike.jpeg" alt="bike" class="product-img" />
          <p class="product-name">Bike</p>
        </div>
        <p class="product-price">$120</p>
      </figure>
    </div>
  )
}

export default CheckoutItem;