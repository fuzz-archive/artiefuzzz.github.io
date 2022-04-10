/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  assetPrefix: isProd ? "/artiefuzzz.github.io/" : ""
}

module.exports = nextConfig
