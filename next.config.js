/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "www.notion.so",
      "images.unsplash.com",
      "prod-files-secure.s3.us-west-2.amazonaws.com",
    ],
  },
  output: "standalone",
  webpack: (config, _options) => {
    config.cache = false;
    return config;
  },
  swcMinify: false,
};

module.exports = nextConfig;
