"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // লোড ডাটা
  useEffect(() => {
    const storedCart = localStorage.getItem("heroCart");
    if (storedCart) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // সেভ ডাটা
  useEffect(() => {
    localStorage.setItem("heroCart", JSON.stringify(cart));
  }, [cart]);

  // অ্যাড টু কার্ট
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item._id === product._id);
      if (existingItem) {
        return prevCart.map((item) =>
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    // টোস্ট বা এলার্ট (অপশনাল)
  };

  // ✅ নতুন: কোয়ান্টিটি কমানোর ফাংশন
  const decreaseQuantity = (id) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item._id === id) {
            // ১ এর নিচে নামলে ওটা ১-ই থাকবে, ডিলেট হবে না (ইউজার ডিলেট বাটনে চাপ দিয়ে ডিলেট করবে)
            return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 };
        }
        return item;
      });
    });
  };

  // রিমুভ ফ্রম কার্ট
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  // ক্লিয়ার কার্ট (চেকআউটের পর লাগবে)
  const clearCart = () => {
      setCart([]);
  }

  return (
    // context value তে নতুন ফাংশনগুলো পাস করা হলো
    <CartContext.Provider value={{ cart, addToCart, decreaseQuantity, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};