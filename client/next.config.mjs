/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        // https://placehold.co/600x400
        hostname: 'placehold.co',
        protocol: 'https',
        // pathname: '/*',
      }
    ]
  }
}

export default nextConfig;