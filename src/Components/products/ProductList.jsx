"use client"; // এটি অবশ্যই দিতে হবে কারণ এখানে আমরা useState ব্যবহার করছি
import React, { useState } from "react";
import ProductCard from "../cards/ProductCard";

const ProductList = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // সার্চ লজিক: টাইটেল অথবা বাংলা নাম দিয়ে সার্চ করা যাবে
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.bangla?.includes(searchTerm) // বাংলা নাম থাকলে সেটা দিয়েও সার্চ হবে
  );

  return (
    <div>
      {/* Search Input Section */}
      <div className="flex justify-center my-5">
        <label className="input bg-blue-200 border-2 flex items-center gap-2">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
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
          <input
            type="search"
            required
            placeholder="Search products..."
            className="grow"
            onChange={(e) => setSearchTerm(e.target.value)} // ইনপুট নেওয়ার সাথে সাথে স্টেট আপডেট হবে
          />
        </label>
      </div>

      {/* Product Grid Section */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.title} product={product} />
          ))}
        </div>
      ) : (
        // যদি সার্চ রেজাল্টে কিছু না পাওয়া যায়
        <div className="text-center py-10 text-gray-500">
          <p>No products found matching "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;