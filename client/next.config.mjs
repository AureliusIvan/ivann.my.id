/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        hostname: 'placehold.co',
        protocol: 'https',
      },
      {
        hostname: 'picsum.photos',
        protocol: 'https',
      },
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "res.cloudinary.com",
      }
    ]
  }
  ,
  serverRuntimeConfig: {
    apiURL: process.env.API_URL
  },
  publicRuntimeConfig: {
    apiURL: process.env.API_URL
  }
}

export default nextConfig;