const formatProvinces = require("./format-provinces/index");

const basePath = process.argv[2];

const inPath = `${basePath}/.data/provinces.json`;
const outPath = `${basePath}/.data/out/processed-provinces.json`;

(async function () {
  await formatProvinces(inPath, outPath);
})();
