'use client';
import React from 'react';
import { Product } from '../types/type';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type ProductProps = {
  product: Product;
};
export const SingleProduct = ({ product }: ProductProps) => {
  const router = useRouter();

  const handleOnClick = (id: number) => {
    router.push(`products/${id}`);
  };

  return (
    <div
      className="product-container"
      onClick={() => handleOnClick(product.id)}
    >
      <div className="w-[300px] h-[300px] mx-auto justify-center items-center space-y-4">
        <p className="text-center">{product.title}</p>
        <div className="w-[200px] h-[200px] mx-auto flex justify-center items-center overflow-hidden">
          <Image
            src={product.image}
            alt={product.title}
            width={150}
            height={150}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};
