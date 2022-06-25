import React from 'react';
import '@styles/ProductList.scss'
import ProdutItem from '@components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';

const API = 'http://api.escuelajs.co/api/v1/products'


const ProductList = () => {
  const products = useGetProducts(API)
  return (
    <section className="cards-container">
      {products.map(product => (
        <ProdutItem product={product} key={product.id} />
      ))}
    </section>
  )
}

export default ProductList;