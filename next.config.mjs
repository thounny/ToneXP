/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "do6x92ebhap2.cloudfront.net", // Correct hostname without "https://"
      },
    ],
  },
  experimental: {
    fetchTimeout: 20000, // 20 seconds timeout
  },
};

export default nextConfig;
