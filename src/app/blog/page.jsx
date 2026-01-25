import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaBrain, FaUsers, FaMobileAlt, FaArrowRight, FaCheckCircle } from 'react-icons/fa';

export const metadata = {
  title: "Why Toys Matter | Hero Kids Blog",
  description: "Discover how the right toys can boost your child's brain development and social skills.",
};

const BlogPage = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      
      {/* Hero Header Section */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src="https://images.pexels.com/photos/5435599/pexels-photo-5435599.jpeg"
          alt="Happy kid playing with educational toys"
          fill
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <span className="bg-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            Parenting Guide
          </span>
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
            More Than Just Play: How Toys Shape Your Child’s Future 🚀
          </h1>
          <p className="mt-4 text-lg md:text-xl opacity-90 max-w-2xl">
            Why investing in the right toys is the best gift you can give to your child's developing brain.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        
        {/* Intro */}
        <div className="prose lg:prose-xl mx-auto mb-12">
          <p className="text-gray-600 leading-relaxed text-lg">
            As parents, we often see toys as simple distractions to keep our little ones busy. 
            But did you know that <span className="font-bold text-primary">play is the work of childhood?</span> 
            Research shows that the right toys don't just entertain—they teach problem-solving, 
            emotional intelligence, and motor skills faster than any classroom lesson.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mt-4">
            Here are 3 scientific reasons why you should choose educational toys for your Hero.
          </p>
        </div>

        {/* Key Points Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Point 1 */}
          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-primary">
            <div className="card-body items-center text-center">
              <FaBrain className="text-5xl text-primary mb-4" />
              <h3 className="card-title text-xl font-bold">Boosts Brain Power</h3>
              <p className="text-gray-600 text-sm">
                Puzzles and building blocks challenge the brain, improving memory, concentration, and logical thinking from an early age.
              </p>
            </div>
          </div>

          {/* Point 2 */}
          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-secondary">
            <div className="card-body items-center text-center">
              <FaUsers className="text-5xl text-secondary mb-4" />
              <h3 className="card-title text-xl font-bold">Teaches Social Skills</h3>
              <p className="text-gray-600 text-sm">
                Role-playing toys (like kitchen sets or doctors) teach empathy, sharing, and communication skills vital for school life.
              </p>
            </div>
          </div>

          {/* Point 3 */}
          <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-accent">
            <div className="card-body items-center text-center">
              <FaMobileAlt className="text-5xl text-accent mb-4" />
              <h3 className="card-title text-xl font-bold">Reduces Screen Time</h3>
              <p className="text-gray-600 text-sm">
                Engaging toys are the #1 way to keep kids away from harmful mobile screens and cartoons, promoting active physical play.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison Section (Convincing Part) */}
        <div className="bg-blue-50 rounded-2xl p-8 md:p-12 mb-12 flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Screen Time vs. Creative Play
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-gray-700">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>Active brain engagement</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>Better sleep patterns</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>Improved hand-eye coordination</span>
              </li>
              <li className="flex items-center gap-3 text-gray-700">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span>Happiness without addiction</span>
              </li>
            </ul>
            <Link href="/products" className="btn btn-primary mt-6 text-white px-8">
              Explore Healthy Toys <FaArrowRight />
            </Link>
          </div>
          <div className="md:w-1/2 relative h-64 w-full rounded-xl overflow-hidden shadow-lg">
             <Image 
                src="https://images.unsplash.com/photo-1501686637-b7aa9c48a882?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVpbGRpbmclMjBibG9ja3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Kid playing blocks"
                fill
                className="object-cover"
             />
          </div>
        </div>

        {/* Conclusion */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Spark Their Imagination?</h2>
          <p className="text-gray-600 mb-8">
            Every toy in our collection is handpicked to ensure it adds value to your child's life. 
            do not just buy a toy, buy a brighter future.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/products" className="btn btn-primary btn-lg text-white shadow-xl hover:scale-105 transition-transform">
               Shop Best Sellers
            </Link>
            <Link href="/contact" className="btn btn-outline btn-lg">
               Contact Us
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogPage;