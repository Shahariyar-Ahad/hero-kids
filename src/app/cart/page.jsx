"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FaTrash, FaMinus, FaPlus, FaArrowLeft, FaShoppingBag } from "react-icons/fa";
import { useCart } from "@/Context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, addToCart, decreaseQuantity } = useCart();

  // প্রাইস ক্যালকুলেশন
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingCost = 60; // ডেলিভারি চার্জ (ফিক্সড)
  const total = subtotal > 0 ? subtotal + shippingCost : 0;

  // কার্ট খালি থাকলে এই ডিজাইন দেখাবে
  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-4">
        <div className="text-9xl text-gray-200">
            <FaShoppingBag />
        </div>
        <h2 className="text-3xl font-bold text-gray-600">Your Cart is Empty!</h2>
        <p className="text-gray-500">Looks like you have not added any toys yet.</p>
        <Link href="/products" className="btn btn-primary text-white mt-4 px-8">
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 bg-base-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
        Shopping Cart <span className="text-gray-400 text-lg font-normal">({cart.length} items)</span>
      </h1>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side: Product List */}
        <div className="flex-1 overflow-x-auto">
          <table className="table w-full">
            {/* Table Head */}
            <thead>
              <tr className="bg-base-200 text-base">
                <th>Product</th>
                <th className="text-center">Quantity</th>
                <th className="text-right">Price</th>
                <th className="text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item._id} className="border-b">
                  {/* Product Info */}
                  <td>
                    <div className="flex items-center gap-4">
                      <div className="avatar">
                        <div className="mask mask-squircle w-20 h-20 bg-gray-100">
                          <img src={item.image} alt={item.title} className="object-contain" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-lg">{item.title}</div>
                        <div className="text-sm opacity-50">Unit Price: ৳{item.price}</div>
                      </div>
                    </div>
                  </td>

                  {/* Quantity Control */}
                  <td className="text-center">
                    <div className="join border border-gray-300 rounded-lg">
                      <button 
                        onClick={() => decreaseQuantity(item._id)} 
                        className="btn btn-sm join-item btn-ghost hover:bg-gray-200"
                        disabled={item.quantity <= 1}
                      >
                        <FaMinus size={10} />
                      </button>
                      <span className="btn btn-sm join-item btn-ghost pointer-events-none w-10 text-base font-bold">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => addToCart(item)} 
                        className="btn btn-sm join-item btn-ghost hover:bg-gray-200"
                      >
                        <FaPlus size={10} />
                      </button>
                    </div>
                  </td>

                  {/* Total Price for Item */}
                  <td className="text-right font-bold text-lg">
                    ৳{item.price * item.quantity}
                  </td>

                  {/* Remove Button */}
                  <td className="text-right">
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="btn btn-ghost text-error hover:bg-red-50 btn-sm"
                      title="Remove Item"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="mt-6">
             <Link href="/products" className="flex items-center gap-2 text-primary font-bold hover:underline">
                <FaArrowLeft /> Continue Shopping
             </Link>
          </div>
        </div>

        {/* Right Side: Order Summary */}
        <div className="w-full lg:w-96 h-fit">
          <div className="card bg-base-200 shadow-xl rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-4 border-b pb-2">Order Summary</h2>
            
            <div className="flex justify-between py-2 text-gray-600">
              <span>Subtotal</span>
              <span className="font-bold">৳{subtotal}</span>
            </div>
            
            <div className="flex justify-between py-2 text-gray-600">
              <span>Shipping</span>
              <span>৳{shippingCost}</span>
            </div>
            
            <div className="flex justify-between py-2 text-gray-600">
              <span>Tax (0%)</span>
              <span>৳0</span>
            </div>

            <div className="divider my-2"></div>
            
            <div className="flex justify-between text-xl font-bold text-primary mb-6">
              <span>Total</span>
              <span>৳{total}</span>
            </div>

            <button className="btn btn-primary w-full text-white text-lg shadow-lg hover:shadow-xl transition-all">
              Proceed to Checkout
            </button>

            <p className="text-xs text-center text-gray-400 mt-4">
               Secure Checkout • 100% Money Back Guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;