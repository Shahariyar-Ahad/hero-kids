"use client";

import { FaShoppingCart } from "react-icons/fa";
// ১. নতুন ইম্পোর্টগুলো যুক্ত করুন
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { useCart } from "@/Context/CartContext";

const AddToCartBtn = ({ product }) => {
  const { addToCart } = useCart();
  const [user, setUser] = useState(null); // ইউজারের স্টেট
  const router = useRouter(); // রিডাইরেক্ট করার জন্য

  // ২. ইউজার লগইন আছে কি না তা চেক করা
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  // ডিসকাউন্ট প্রাইস ক্যালকুলেশন
  const finalPrice = product.discount
    ? Math.round(product.price - (product.price * product.discount) / 100)
    : product.price;

  const handleAddToCart = () => {
    // ৩. এখানে লজিক চেক করা হচ্ছে
    if (!user) {
      // যদি ইউজার না থাকে
      alert("Please login to add items to cart! 🔒"); // এলার্ট মেসেজ
      router.push("/auth/login"); // লগইন পেজে পাঠিয়ে দেওয়া
      return; // ফাংশন এখানেই থামিয়ে দেওয়া
    }

    // যদি ইউজার থাকে, তাহলে কার্টে যোগ হবে
    const cartItem = {
      _id: product._id.toString(),
      title: product.title,
      image: product.image,
      price: finalPrice,
    };
    addToCart(cartItem);
  };

  return (
    <button 
      onClick={handleAddToCart}
      className="btn btn-primary flex-1 flex items-center justify-center gap-2 text-white hover:shadow-lg transition-all"
    >
      <FaShoppingCart /> Add to Cart
    </button>
  );
};

export default AddToCartBtn;