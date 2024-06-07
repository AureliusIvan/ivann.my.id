import mdx from "@next/mdx";

const withMDX = mdx()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP']
  },
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
        protocol: "https"
      }
    ]
  },
  serverRuntimeConfig: {
    apiURL: process.env.API_URL
  },
  publicRuntimeConfig: {
    apiURL: process.env.API_URL
  }
}

export default withMDX(nextConfig);