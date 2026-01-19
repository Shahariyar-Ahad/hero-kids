

import Image from 'next/image';
import Link from 'next/link';
import { FaQuestionCircle, FaShoppingCart } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa6';
import { MdQuestionAnswer } from "react-icons/md";
import { getSingleProduct } from '@/actions/server/Products'; // adjust path if needed

// ✅ Dynamic Metadata for SEO
export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = await getSingleProduct(id);

  if (!product) {
    return { title: "Product not found" };
  }

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: product.title,
      description: product.description,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: [product.image],
    },
  };
}

// ✅ Product Page Component
const ProductDetails = async ({ params }) => {
  const { id } = params;
  const product = await getSingleProduct(id);

  // ❌ Product not found handling
  if (!product || Object.keys(product).length === 0) {
    return (
      <div className="text-center p-10">
        <h2 className="text-xl font-bold">Product not found</h2>
        <Link href="/" className="text-blue-500 underline mt-4 block">
          Back to Products
        </Link>
      </div>
    );
  }

  // ✅ Calculate discounted price if any
  const discountedPrice = product.discount
    ? Math.round(product.price - (product.price * product.discount) / 100)
    : product.price;

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="relative w-full md:w-1/2 h-80 md:h-[500px] bg-gray-100 rounded-xl flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain p-4"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between w-full md:w-1/2">
          <div>
            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              {product.title}
            </h1>
            {product.bangla && (
              <p className="text-gray-600 mb-4">{product.bangla}</p>
            )}

            {/* Ratings & Sold */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1 text-orange-500">
                <FaStar />
                <span className="text-gray-700 font-medium">{product.ratings}</span>
              </div>
              <span className="text-gray-500">Sold: {product.sold}</span>
              {product.qna && <span className="text-gray-500">{product.qna.length} Q&A</span>}
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl md:text-3xl font-bold text-primary">
                ৳{discountedPrice}
              </span>
              {product.discount > 0 && (
                <span className="line-through text-gray-400 text-lg">
                  ৳{product.price}
                </span>
              )}
              {product.discount > 0 && (
                <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm animate-pulse">
                  {product.discount}% OFF
                </span>
              )}
            </div>

            {/* Description */}
            {product.description && (
              <div className="mb-6">
                <h2 className="font-semibold text-lg mb-2">Description</h2>
                <p className="text-gray-700 whitespace-pre-line">{product.description}</p>
              </div>
            )}

            {/* Key Features */}
            {product.info && product.info.length > 0 && (
              <div className="mb-6">
                <h2 className="font-semibold text-lg mb-2">Key Features</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {product.info.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Q&A */}
            {product.qna && product.qna.length > 0 && (
              <div className="mb-6">
                <h2 className="font-semibold text-lg mb-2">Q&A</h2>
                {product.qna.map((qa, idx) => (
                  <div key={idx} className="mb-2">
                    <p className="font-medium text-red-500 flex items-center gap-2">
                      <FaQuestionCircle /> {qa.question}
                    </p>
                    <p className="text-gray-700 ml-6 flex items-center gap-2">
                      <MdQuestionAnswer /> {qa.answer}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <button className="btn btn-primary flex-1 flex items-center justify-center gap-2">
              <FaShoppingCart /> Add to Cart
            </button>
            <Link href="/" className="btn btn-outline flex-1 text-center">
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
