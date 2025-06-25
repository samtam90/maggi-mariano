const { generatePages } = require("./create-templated-pages/index.js");

const basePath = process.argv[2];

const templatesData = require("./create-templated-pages/.data/templates-data.json");
const outPath = `${basePath}/.data/out`;
const templatesPath = `${basePath}/.data/templates`;

(async function () {
  await generatePages(outPath, templatesPath, templatesData);
})();
