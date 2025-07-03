const fs = require("fs");
const xmlBuilder = require("xmlbuilder");

/**
 * @typedef {{path: string, title: string}} PathElement
 * @typedef {{id: number, name: string, url: string}} SitemapDataElement
 */

/**
 * @param {SitemapDataElement} param0
 * @returns
 */
function generateSitemapNode({ id, name, url }) {
  return {
    url: {
      loc: url,
      PageMap: {
        "@xmlns": "http://www.google.com/schemas/sitemap-pagemap/1.0",
        DataObject: {
          "@id": id,
          "@type": "document",
          Attribute: {
            "@name": "name",
            "#text": name,
          },
        },
      },
    },
  };
}

/**
 * @param {SitemapDataElement[]} elements
 * @returns
 */
function generateSitemapNodes(elements) {
  const nodes = elements.map(generateSitemapNode);
  const root = xmlBuilder
    .create("urlset")
    .att("xmlns", "http://www.sitemaps.org/schemas/sitemap/0.9");
  for (const node of nodes) {
    root.ele(node);
  }
  return root.end({ pretty: true });
}

/**
 * @returns
 * @param {{prefixes: PathElement[], suffixes: PathElement[]}} templatesData
 * @param {SitemapDataElement[]?} additionalElements
 * @param {string} baseUrl
 * @param {string} outPath
 * @param {(baseUrl: string, prefixPath: string) => string} processBaseUrl
 */
async function generateSitemap(
  templatesData,
  additionalElements = [],
  baseUrl,
  outPath,
  processBaseUrl
) {
  const templatedPagesData = [];
  const { prefixes, suffixes } = templatesData;

  /* generate names & URLs for templated pages */
  for (const prefix of prefixes) {
    for (const suffix of suffixes) {
      const id = `${prefix.path}-${suffix.path}`;
      const actualBaseUrl = processBaseUrl(baseUrl, prefix.path);
      const dataElement = {
        id,
        name: `${prefix.title} ${suffix.title}`,
        url: `${actualBaseUrl}/${prefix.path}/${id}`,
      };
      templatedPagesData.push(dataElement);
    }
  }

  const serializedGeneratedXml = generateSitemapNodes(
    templatedPagesData.concat(additionalElements)
  );

  try {
    await fs.promises.unlink(outPath);
  } catch (err) {}
  await fs.promises.writeFile(outPath, serializedGeneratedXml);
}

module.exports = { generateSitemap };
