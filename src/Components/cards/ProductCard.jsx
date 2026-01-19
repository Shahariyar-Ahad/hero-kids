import Image from "next/image";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import ProductCardSkeleton from "./ProductCardSkeleton";
import Link from "next/link";

const ProductCard = ({ product, loading }) => {
  if (loading) {
    return <ProductCardSkeleton />;
  }

  const {
    title,
    image,
    price,
    discount,
    ratings,
    sold,
  } = product;

  const discountedPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
   <div className="card bg-gradient-to-b from-white to-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl border border-gray-200 overflow-hidden">
  {/* Product Image */}
  <figure className="h-56 md:h-64 lg:h-72 bg-white flex items-center justify-center">
  <Image
    src={image}
    alt={title}
    width={200}
    height={100}
    className="object-contain p-4 transition-transform duration-500 hover:scale-105"
  />
</figure>


  {/* Card Body */}
  <div className="card-body p-5 flex flex-col h-full">
  {/* Title */}
  <h2 className="card-title text-base md:text-lg lg:text-xl line-clamp-2 font-semibold text-gray-900">
    {title}
  </h2>

  {/* Rating & Sold */}
  <div className="flex items-center justify-between text-sm mt-2">
    <div className="flex items-center gap-1 text-orange-500">
      <FaStar />
      <span className="text-gray-700 font-medium">{ratings}</span>
    </div>
    <span className="text-gray-500">Sold: {sold}</span>
  </div>

  {/* Price */}
  <div className="mt-2 flex items-center gap-3">
    <span className="text-lg md:text-xl font-bold text-primary">
      ৳{discountedPrice}
    </span>
    {discount > 0 && (
      <span className="text-sm md:text-base line-through text-gray-400">
        ৳{price}
      </span>
    )}
    {discount > 0 && (
      <span className="bg-red-500 text-white text-xs md:text-sm font-semibold px-2 py-1 rounded-full animate-pulse">
        {discount}% OFF
      </span>
    )}
  </div>

  {/* Spacer to push buttons to bottom */}
  <div className="mt-auto space-y-2">
    {/* Add to Cart */}
    <button className="btn btn-primary w-full gap-2 hover:bg-primary-focus transition-all duration-300 flex items-center justify-center">
      <FaShoppingCart />
      Add to Cart
    </button>

    {/* View Details */}
    <Link href={`/products/${product._id || product.id}`} className="btn btn-primary btn-outline w-full text-center">
      View Details
    </Link>
  </div>
</div>

</div>

  );
};

export default ProductCard;
