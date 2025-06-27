const formatComuni = require("./format-comuni/index");

const basePath = process.argv[2];
const province = process.argv[3];

const inPath = `${basePath}/.data/comuni.json`;
const outPath = `${basePath}/.data/out/processed-comuni.json`;

(async function () {
  await formatComuni(inPath, outPath, province);
})();
