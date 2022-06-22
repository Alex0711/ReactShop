import React from 'react';
import '../styles/ProductList.scss'
import ProdutItem from '../components/ProductItem';

const ProductList = () => {
  return (
    <section class="cards-container">
        <ProdutItem />
        <ProdutItem />
        <ProdutItem />
        <ProdutItem />
        <ProdutItem />
    </section>
  )
}

export default ProductList;