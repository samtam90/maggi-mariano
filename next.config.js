const million = require("million/compiler");

const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "https://new.maggi-mariano.it",
        "http://localhost:3000",
        "http://localhost:3001",
      ],
    },
  },
};
const millionConfig = { auto: true };

module.exports = million.next(nextConfig, millionConfig);
