import { SingleProduct } from '../types/type';
import Image from 'next/image';
import Link from 'next/link';

const fetchProduct = async (id: string): Promise<SingleProduct | null> => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) return null;
  return res.json();
};

export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const product = await fetchProduct(params.id);
  if (!product) return <div>Product not found</div>;
  return (
    <div className="flex justify-center items-center h-auto mt-8 md:mt-0 md:h-screen">
      <div className="mx-auto max-w-sm bg-white p-4 rounded-md shadow-md border border-gray-200 gap-2">
        <div className="flex flex-col space-y-4 mx-4">
          <p className="text-center">{product.title}</p>
          <div className="w-[200px] h-[200px] mx-auto">
            <Image
              className="mx-auto"
              src={product.image}
              alt={product.title}
              width={150}
              height={100}
            />
          </div>
          <p className="text-right">Price: {product.price}</p>
          <p className="text-sm">{product.description}</p>
          <Link
            href="/"
            className="border rounded-xl items-center mx-10 border-blue-400  hover:bg-blue-600 hover:text-white text-center"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}
