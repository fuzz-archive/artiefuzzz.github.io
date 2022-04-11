const isProd = process.env.NODE_ENV === "production"

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    disableStaticImages: true
  },
  reactStrictMode: true,
  poweredByHeader: false,
  assetPrefix: isProd ? "/artiefuzzz.github.io/" : "",
  env: {
    storePicturesInWEBP: true,
  }
}

module.exports = nextConfig
