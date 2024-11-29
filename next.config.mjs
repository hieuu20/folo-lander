/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loosefstvl.s3.eu-west-2.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
