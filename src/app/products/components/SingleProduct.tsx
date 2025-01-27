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
      className="bg-white p-4 rounded-md shadow-md border border-gray-200 gap-2 mx-auto max-w-sm"
      onClick={() => handleOnClick(product.id)}
    >
      <div className="w-[300px] h-[300px] mx-auto justify-center items-center">
        <p>{product.title}</p>
        <div className="w-[150px] h-[150px] mx-auto">
          <Image
            src={product.image}
            alt={product.title}
            width={150}
            height={150}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};
