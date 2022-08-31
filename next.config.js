/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: {
      unoptimized: true,
    },
},
basePath:'/planets-facts-next-js-app',
assetPrefix:'/planets-facts-next-js-app'
}



module.exports = nextConfig
