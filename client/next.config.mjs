/** @type {import('next').NextConfig} */
const nextConfig = {
  // image
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "4000",
      },
      {
        // cloudinary
        hostname: "res.cloudinary.com",
        protocol: "https",
        port: "",
      },
     ],
  },
};

export default nextConfig;
