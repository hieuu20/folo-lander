/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "p1.cdn.knky.co",
      },
      {
        protocol: "https",
        hostname: "lander.knky.co",
      },
      {
        protocol: "https",
        hostname: "assets-common.wata.co.uk",
      },
    ],
  },
  output: 'standalone',
};

export default nextConfig;
