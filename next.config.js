const withPlugins = require('next-optimized-images')
const optimizedImages = require('next-optimized-images')
const isProd = process.env.NODE_ENV === "production"

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['raw.githubusercontent.com']
  },
  reactStrictMode: true,
  poweredByHeader: false,
  assetPrefix: isProd ? "/artiefuzzz.github.io/" : ""
}

module.exports = withPlugins(nextConfig, [optimizedImages, {
  mozpng: {
    quality: 90
  }
}])
