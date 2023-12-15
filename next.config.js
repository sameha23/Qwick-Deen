/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "pbs.twimg.com",
      "qwikmedic.pythonanywhere.com",
    ],
  },
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true }  
}

module.exports = nextConfig
