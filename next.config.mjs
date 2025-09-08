/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loosefstvl.s3.eu-west-2.amazonaws.com",
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
};

export default nextConfig;
