/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [require("path").join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      },
    ],
  },
  output: "export"
};

module.exports = nextConfig;
