
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com', // ✅ সঠিক ডোমেইন (images.pexels.com)
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // ✅ এটিও লাগবে কারণ আপনার কোডে Unsplash এর ছবি আছে
      },
      {
        protocol: 'https',
        hostname: 'img.daisyui.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
};

export default nextConfig;

