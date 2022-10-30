// next.config.js
const withImages = require("next-images");
module.exports = withImages({
  inlineImageLimit: 16384,
  images: {
    domains: ["cdn.hashnode.com"]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader"
    });
    return config;
  }
});
