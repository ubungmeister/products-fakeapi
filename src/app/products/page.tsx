import React from 'react';
// fetch products from the API
import { ProductList } from './components/ProductList';
const fetchProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }
  const products = await response.json();
  return products;
};

const page = async () => {
  try {
    const products = await fetchProducts();
    console.log('products', products);
    return <ProductList products={products} />;
  } catch (error) {
    console.error(error);
    return <div>Failed to load products. Please try again later.</div>;
  }
};

export default page;
