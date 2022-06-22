import React from 'react';
import '../styles/ProductItem.scss';

const ProdutItem = () => {
  return(
    <div class="product-card">
        <img src="./imgs/bike.jpeg" alt="Una bici :)" class="product-img" />
        <div class="product-info">
            <div>
                <p>$120,00</p>
                <p>Bike</p>
            </div>
            <figure>
                <img src="./icons/bt_add_to_cart.svg" alt="" />
            </figure>
        </div>
    </div>
  )
};

export default ProdutItem;