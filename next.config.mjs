/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        and: [/\.(js|ts|jsx|tsx)$/],
      },
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
