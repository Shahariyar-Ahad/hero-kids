export const dynamic = "force-dynamic";


import React from 'react';
import products from "@/data/products.json";
import ProductCard from '../cards/ProductCard';
import { getProducts } from '@/actions/server/Products';

const Products = async() => {
    const products = (await getProducts()) || [];
  return (
    <div>
      <div className='flex justify-center my-5 '>
        <label className="input bg-blue-200 border-2">
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" required placeholder="Search" />
      </label>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {
          products.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Products;
