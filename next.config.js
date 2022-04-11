const isProd = process.env.NODE_ENV === "production"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  assetPrefix: isProd ? "/artiefuzzz.github.io/" : "",
  env: {
    storePicturesInWEBP: true,
  }
}

module.exports = nextConfig
