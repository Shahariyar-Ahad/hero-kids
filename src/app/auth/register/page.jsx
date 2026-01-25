"use client";
import { useState } from "react";
import { auth } from "@/lib/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaEnvelope, FaLock, FaGoogle, FaUserPlus } from "react-icons/fa6"; 

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Email/Password Register Function
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      
      // সফল হলে ইউজারকে নোটিফাই করা
      alert("🎉 Registration Successful! Please Login.");
      
      // লগিন পেজে রিডাইরেক্ট
      router.push("/auth/login");
    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };  

  // Google Sign In Function (সংশোধিত অংশ)
  const handleGoogleSignIn = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider(); // 'new' কিউয়ার্ড ব্যবহার করতে হবে

    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        // কুকি সেট করা (অপশনাল, যদি আপনার মিডলওয়্যারে লাগে)
        document.cookie = `isLoggedIn=true; path=/`;

        alert("Google Sign-in successful! Welcome " + user.displayName);
        router.push("/"); // 'navigate' এর বদলে 'router.push'
    } catch (error) {
        console.error("Google Sign-in failed:", error);
        alert("Google Sign-in failed: " + error.message);
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
      {/* Main Card */}
      <div className="card lg:card-side bg-base-100 shadow-2xl max-w-4xl w-full overflow-hidden rounded-2xl">
        
        {/* Left Side - Image Section */}
        <div className="lg:w-1/2 relative bg-secondary h-64 lg:h-auto order-first lg:order-last">
            <img 
              src="https://images.unsplash.com/photo-1558060370-d644479cb673?q=80&w=1000&auto=format&fit=crop" 
              alt="Kid superhero" 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute bottom-0 left-0 p-8 bg-gradient-to-t from-black/70 to-transparent w-full text-white">
                <h2 className="text-3xl font-bold mb-2">Join the Club! 🚀</h2>
                <p className="opacity-90">Create an account and start your adventure today.</p>
            </div>
        </div>

        {/* Right Side - Register Form */}
        <div className="card-body lg:w-1/2 p-8 lg:p-12">
          <div className="text-center lg:text-left mb-6">
            <h2 className="text-3xl font-bold text-primary">Create Account</h2>
            <p className="text-gray-500 mt-2">Sign up for free and enjoy exclusive deals!</p>
          </div>

          <form onSubmit={handleRegister} className="flex flex-col gap-4">
            
            {/* Email Input */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
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
                    placeholder="Create a strong password" 
                    className="input input-bordered w-full pl-10 focus:input-primary transition-all" 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
              </div>
              <label className="label">
                <span className="label-text-alt text-gray-400">Must be at least 6 characters</span>
              </label>
            </div>

            {/* Register Button */}
            <button 
                type="submit" 
                className="btn btn-primary w-full text-white text-lg mt-4 shadow-lg shadow-primary/40 hover:shadow-primary/60"
                disabled={loading}
            >
              {loading ? <span className="loading loading-spinner"></span> : 
              <span className="flex items-center gap-2">Register <FaUserPlus/></span>}
            </button>
          </form>

          {/* Divider */}
          <div className="divider text-sm text-gray-400">OR</div>

          {/* Social Signup Button */}
          <button 
            onClick={handleGoogleSignIn} 
            className="btn btn-outline w-full flex items-center gap-2 hover:bg-base-200 hover:text-black"
            disabled={loading} // লোডিং এর সময় বাটন ডিজেবল থাকবে
          >
            {loading ? <span className="loading loading-spinner loading-xs"></span> : <FaGoogle className="text-red-500" />}
            Sign up with Google
          </button>

          {/* Login Link */}
          <p className="text-center mt-6 text-gray-600">
            Already have an account?{" "}
            <Link href="/auth/login" className="text-primary font-bold hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  ); 
}