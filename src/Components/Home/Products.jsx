export const dynamic = "force-dynamic";

import React from 'react';
import { getProducts } from '@/actions/server/Products';
// নতুন তৈরি করা ক্লায়েন্ট কম্পোনেন্ট ইম্পোর্ট করুন
import ProductList from '@/components/products/ProductList'; 

const Products = async () => {
  // সার্ভার থেকে ডাটা আনা হচ্ছে
  const products = (await getProducts()) || [];

  return (
    <div>
      {/* ডাটাগুলো প্রপস হিসেবে পাঠিয়ে দেওয়া হলো */}
      <ProductList products={products} />
    </div>
  );
};

export default Products;