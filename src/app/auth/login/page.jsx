"use client";
import { useState } from "react";
import { auth } from "@/lib/firebase.config";
// ১. GoogleAuthProvider এবং signInWithPopup ইম্পোর্ট করা হলো (গুগল লগিনের জন্য আবশ্যিক)
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaEnvelope, FaLock, FaGoogle } from "react-icons/fa6"; 

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); 
  const router = useRouter();

  // ইমেইল এবং পাসওয়ার্ড দিয়ে সাধারণ লগিন ফাংশন
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // লগিন স্ট্যাটাস মনে রাখার জন্য কুকি সেট করা
      document.cookie = `isLoggedIn=true; path=/`;
      
      // alert("Welcome back, Hero! 🦸‍♂️");
      router.push("/products"); 
    } catch (error) {
      alert("Login failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // ২. গুগল লগিন হ্যান্ডলার ফাংশন (নতুন যোগ করা হয়েছে)
  const handleGoogleLogin = async () => {
    setLoading(true); // বাটন লোডিং স্টেটে নেওয়া হলো
    
    // ৩. Google Provider ইন্সট্যান্স তৈরি করা
    const provider = new GoogleAuthProvider();

    try {
        // ৪. পপআপ উইন্ডো ওপেন করে লগিন করা
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        // ৫. সফল হলে কুকি সেট করা (মিডলওয়্যারের জন্য)
        document.cookie = `isLoggedIn=true; path=/`;

        alert("Welcome back, " + user.displayName + "! 🚀"); // ইউজারের নাম দেখানো
        
        // ৬. হোমপেজ বা প্রোডাক্ট পেজে পাঠিয়ে দেওয়া
        router.push("/products"); 

    } catch (error) {
        console.error("Google Login Error:", error);
        alert("Google Login Failed: " + error.message);
    } finally {
        setLoading(false); // লোডিং বন্ধ করা
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      {/* Main Card */}
      <div className="card lg:card-side bg-base-100 shadow-2xl max-w-4xl w-full overflow-hidden rounded-2xl">
        
        {/* Left Side - Image Section */}
        <div className="lg:w-1/2 relative bg-primary h-64 lg:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1000&auto=format&fit=crop" 
              alt="Kids playing with toys" 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/70 to-transparent w-full text-white">
                <h2 className="text-3xl font-bold mb-2">Welcome Back! 👋</h2>
                <p className="opacity-90">Discover the best toys for your little heroes.</p>
            </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="card-body lg:w-1/2 p-8 lg:p-12">
          <div className="text-center lg:text-left mb-6">
            <h2 className="text-3xl font-bold text-primary">Login</h2>
            <p className="text-gray-500 mt-2">Enter your details to access your account</p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            
            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FaEnvelope />
                </div>
                <input 
                    type="email" 
                    placeholder="hero@example.com" 
                    className="input input-bordered w-full pl-10 focus:input-primary transition-all" 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Password</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <FaLock />
                </div>
                <input 
                    type="password" 
                    placeholder="••••••••" 
                    className="input input-bordered w-full pl-10 focus:input-primary transition-all" 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-primary">Forgot password?</a>
              </label>
            </div>

            {/* Login Button */}
            <button 
                type="submit" 
                className="btn btn-primary w-full text-white text-lg mt-2 shadow-lg shadow-primary/40 hover:shadow-primary/60"
                disabled={loading}
            >
              {loading ? <span className="loading loading-spinner"></span> : "Login"}
            </button>
          </form>

          {/* Divider */}
          <div className="divider text-sm text-gray-400">OR</div>

          {/* ৭. Google Login Button - এখানে onClick ইভেন্ট যোগ করা হয়েছে */}
          <button 
            onClick={handleGoogleLogin} 
            className="btn btn-outline w-full flex items-center gap-2 hover:bg-base-200 hover:text-black"
            disabled={loading} // লোডিং এর সময় বাটন কাজ করবে না
          >
            {/* লোডিং হলে স্পিনার দেখাবে, নাহলে আইকন */}
            {loading ? <span className="loading loading-spinner loading-xs"></span> : <FaGoogle className="text-red-500" />}
            Continue with Google
          </button>

          {/* Register Link */}
          <p className="text-center mt-6 text-gray-600">
            Do not  have an account?{" "}
            <Link href="/auth/register" className="text-primary font-bold hover:underline">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  ); 
}