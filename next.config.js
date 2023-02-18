/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    runtime: "experimental-edge",
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com'
      }
    ]
  }
}

module.exports = nextConfig
