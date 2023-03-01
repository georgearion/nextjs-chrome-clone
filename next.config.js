/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['i.pravatar.cc'],
  },
  env: {
    BASEURL: process.env.BASEURL,
  },
};

module.exports = nextConfig;
