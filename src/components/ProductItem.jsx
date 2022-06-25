import React, { useContext } from 'react';
import appContext from '@context/appContext';

import Cart from "@icons/bt_add_to_cart.svg";
import '@styles/ProductItem.scss';

const ProdutItem = ({product}) => {
  const { addToCart } = useContext(appContext);

  const handleClick = item => {
    addToCart(item);
    console.log('Agregado')
  }

  return(
    <div className="product-card">
        <img src= {product.images[0]} alt={product.title} className="product-img" />
        <div className="product-info">
            <div>
                <p>{product.price}</p>
                <p>{product.title}</p>
            </div>
            <figure onClick={() => handleClick(product)}>
                <img src= {Cart} alt="" />
            </figure>
        </div>
    </div>
  )
};

export default ProdutItem;