const million = require("million/compiler");

const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        "new.maggi-mariano.it",
        "localhost:3000",
        "localhost:3001",
      ],
    },
  },
};

const millionConfig = { auto: true };
module.exports = million.next(nextConfig, millionConfig);