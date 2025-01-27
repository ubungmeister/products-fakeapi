'use client';
import { useEffect, useState } from 'react';
import { SingleProduct } from './SingleProduct';
import { Product } from '../types/type';
import { Selector } from './Selector';
import { Sorting } from './Sorting';

type ProductListProps = {
  products: Product[];
};

export const ProductList = ({ products }: ProductListProps) => {
  const [category, setCategory] = useState('');
  const [sortedProducts, setSortedProducts] = useState<Product[] | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'dsc' | null>(null);

  const categories = products.map((product) => product.category);
  const uniqueCategories = [...new Set(categories)];

  useEffect(() => {
    let filteredProducts = products.filter((product) => {
      if (category === '') return true;
      return product.category === category;
    });

    if (sortOrder === 'asc') {
      filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'dsc') {
      filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
    }

    setSortedProducts(filteredProducts);
  }, [category, products, sortOrder]);

  const handleOnPriceSoring = (order: 'asc' | 'dsc') => {
    setSortOrder(order);
  };

  return (
    <div className="flex flex-col items-center ">
      <div className="products-container">
        <Selector
          setCategory={setCategory}
          uniqueCategories={uniqueCategories}
        />
        <Sorting handleOnPriceSoring={handleOnPriceSoring} />
      </div>
      <div className="products-list grid grid-col-1">
        {sortedProducts?.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
