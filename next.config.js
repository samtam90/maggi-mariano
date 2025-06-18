/*const million = require("million/compiler")

const nextConfig = {};
const millionConfig = { auto: true };

export default million.next(nextConfig, millionConfig);
*/

const nextConfig = {
  experimental: {
    serverActions: true,
  },
};
module.exports = nextConfig;
