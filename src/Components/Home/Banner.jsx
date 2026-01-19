import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 px-5 md:px-10 py-10 bg-amber-200 rounded-4xl">
            
            {/* Text Section */}
            <div className="flex-1 space-y-5 text-center md:text-left">
                <h2 className="font-bold italic text-2xl sm:text-3xl md:text-4xl leading-tight">
                    Give your child a{" "}
                    <span className="text-orange-500">better future</span>
                </h2>

                <p className="font-bold text-lg sm:text-xl md:text-2xl border border-amber-300 bg-amber-300 rounded-full px-6 py-3 inline-block">
                    Buy every toy with{" "}
                    <span className="text-red-500">50% discount</span>
                </p>

                <div>
                    <button className="btn btn-primary btn-outline">
                        Explore Products
                    </button>
                </div>
            </div>

            {/* Image Section */}
            <div className="flex-1 flex justify-center">
                <Image
                    src="/assets/hero.png"
                    alt="Buy every toy with 50% discount"
                    width={500}
                    height={400}
                    className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto"
                    priority
                />
            </div> 
            
        </div> 
        <div>
            <h2 className="
  text-center
  mx-auto
  font-bold
  bg-amber-400
  rounded-full
  py-2
  px-6
  my-10
  text-xl
  sm:text-2xl
  md:text-3xl
  lg:text-4xl
  w-fit
">
  Our Products
</h2>
        </div>
        </div>
        
    );
};

export default Banner;
