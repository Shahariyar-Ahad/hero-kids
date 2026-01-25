"use client"; 
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Navlink from './buttons/Navlink';
import { FaCartPlus } from "react-icons/fa6";
import { auth } from '@/lib/firebase.config'; 
import { onAuthStateChanged, signOut } from 'firebase/auth'; 
import { useRouter } from 'next/navigation';
import { useCart } from '@/Context/CartContext';
// ১. কার্ট কনটেক্সট ইম্পোর্ট (নতুন)


const Navbar = () => { 
    const [user, setUser] = useState(null);
    const router = useRouter();
    
    // ২. কার্ট ডাটা বের করে আনা (নতুন)
    const { cart } = useCart(); 

    // ফায়ারবেস অথেন্টিকেশন লিসেনার
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser); 
            } else {
                setUser(null); 
            }
        });
        return () => unsubscribe(); 
    }, []);

    // লগআউট ফাংশন
    const handleLogout = () => {
        signOut(auth).then(() => {
            document.cookie = "isLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;"; 
            alert("Logged out successfully!");
            router.push('/auth/login');
        }).catch((error) => {
            console.error("Logout error", error);
        });
    }

    const nav = <>
        <li><Navlink href={"/"}>Home</Navlink></li>
        <li><Navlink href={"/products"}>Products</Navlink></li>
      <li><Navlink href={"/blog"}>Blog</Navlink></li>
        <li><Navlink href={"/contact"}>Contact</Navlink></li>
    </>;

    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {nav}
                    </ul>
                </div>
                <Link href="/" className="btn btn-ghost text-xl text-primary font-bold">Hero Kids</Link> 
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                    {nav}
                </ul>
            </div>

            <div className="navbar-end gap-3"> 
                {/* ৩. কার্ট আইকন আপডেট করা হয়েছে */}
                <Link href={"/cart"} className='btn btn-ghost btn-circle'>
                    <div className="indicator">
                        <FaCartPlus className="text-xl"/>
                        {/* যদি কার্টে কিছু থাকে তবে সংখ্যা দেখাবে, নাহলে 0 */}
                        <span className="badge badge-sm badge-primary indicator-item">
                            {cart?.length || 0}
                        </span>
                    </div>
                </Link>

                {/* প্রোফাইল বা লগিন বাটন */}
                {user ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar online">
                            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img 
                                    alt="User Avatar" 
                                    src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} 
                                />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li className="menu-title px-4 py-2">
                                <span>Hello, {user.displayName || "Hero"}</span>
                            </li>
                            <li><Link href="/profile" className="justify-between">Profile</Link></li>
                            <li><Link href="/orders">My Orders</Link></li>
                            <li><button onClick={handleLogout} className="text-error font-bold">Logout</button></li>
                        </ul>
                    </div>
                ) : (
                    <Link href={"/auth/login"}>
                        <button className='btn btn-primary px-6 text-white'>Login</button> 
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;