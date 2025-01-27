'use client';
import { useEffect, useState } from 'react';
import { SingleProduct } from './SingleProduct';
import { Product } from '../types/type';

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
      <div className="flex flex-row justify-center items-center space-x-4 mt-8">
        <select
          onClick={(e) => setCategory((e.target as HTMLSelectElement).value)}
          className="border border-gray-200 rounded-md p-2 "
          name="category"
          id="category"
        >
          <option value="">All</option>
          {uniqueCategories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
        <div className="flex flex-row items-center space-x-2 border border-gray-300 rounded-md p-2">
          <p className="text-sm font-medium">Sort by price:</p>
          <button
            className="text-lg p-2 rounded-md bg-blue-100 hover:bg-blue-200"
            onClick={() => handleOnPriceSoring('asc')}
          >
            ⬆️
          </button>
          <button
            className="text-lg p-2 rounded-md bg-blue-100 hover:bg-blue-200"
            onClick={() => handleOnPriceSoring('dsc')}
          >
            ⬇️
          </button>
        </div>
      </div>
      <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-4 ">
        {sortedProducts?.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
