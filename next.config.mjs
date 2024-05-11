/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "codeit-images.codeit.com",
      },
      {
        protocol: "https",
        hostname: "ssl.pstatic.net",
      },
      {
        protocol: "https",
        hostname: "data1.pokemonkorea.co.kr",
      },
      {
        protocol: "https",
        hostname: "s.pstatic.net",
      },
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

export default nextConfig;
