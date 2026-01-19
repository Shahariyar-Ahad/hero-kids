


import Banner from "@/Components/Home/Banner";
import Products from "@/Components/Home/Products";
import WhyToys from "@/Components/Home/WhyToys";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">

      {/* banner section */}
      <section>
        <Banner></Banner>
      </section> 

      {/* products section */}
      <section>
          <Products></Products> 
      </section>
      {/*  */}
      <section>
        <WhyToys></WhyToys>
      </section>
    </div>
  );
}
