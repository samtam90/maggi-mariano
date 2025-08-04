const path = require("path");
const fs = require("fs");

/**
 * @typedef {{path: string, title: string}} Suffix
 */

/**
 * @returns Promise<Record<string, Suffix>>
 * @param {string} directoryPath
 * @param {string[]} prefixes
 */
async function readTemplates(directoryPath, prefixes) {
  const out = {};
  for (const prefix of prefixes) {
    const templatePath = path.resolve(directoryPath, `${prefix}.md`);
    const content = await fs.promises.readFile(templatePath, {
      encoding: "utf-8",
    });
    out[prefix] = content;
  }
  return out;
}

/**
 * @returns
 * @param {string} directoryPath
 */
async function deleteDirectoryIfExisting(directoryPath) {
  try {
    console.log(
      `deleteDirectoryIfExisting: deleting directory ${directoryPath}, if existing.`
    );
    const dirContents = await fs.promises.readdir(directoryPath);
    for (const file of dirContents) {
      console.log(`deleteDirectoryIfExisting: deleting file ${file}.`);
      await fs.promises.unlink(path.resolve(directoryPath, file));
    }
    await fs.promises.rmdir(directoryPath);
  } catch (err) {
    console.log(
      `deleteDirectoryIfExisting: directory ${directoryPath} is missing or something else happened, aborting.`
    );
  }
}

/**
 * @returns
 * @param {string} directoryPath
 * @param {string} filename
 * @param {string} content
 */
async function createDirectoryWithSingleFile(directoryPath, filename, content) {
  await fs.promises.mkdir(directoryPath);
  await fs.promises.appendFile(path.resolve(directoryPath, filename), content);
}

/**
 * @returns
 * @param {string} outPath
 * @param {string} templatesPath
 * @param {{prefixes: string[], suffixes: Suffix[]}} templatesData
 */
async function generatePages(outPath, templatesPath, templatesData) {
  const { prefixes, suffixes } = templatesData;
  const templates = await readTemplates(templatesPath, prefixes);

  for (const prefix of prefixes) {
    console.log(`\nProcessing prefix ${prefix}.`);
    /**
     * @type {string}
     */
    const currentTemplate = templates[prefix];
    const outerDirectoryPath = path.resolve(outPath, prefix);
    for (const suffix of suffixes) {
      const directoryPath = path.resolve(
        outPath,
        prefix,
        `${prefix}-${suffix.path}`
      );
      console.log(`\nProcessing full path ${directoryPath}.`);
      await deleteDirectoryIfExisting(directoryPath);
      const processedTemplate = currentTemplate
        .replace(/(\[name\])/g, suffix.title)
        .replace(/(\[path\])/g, suffix.path);
      try {
        await createDirectoryWithSingleFile(
          directoryPath,
          "page.js",
          processedTemplate
        );
      } catch (err) {
        await fs.promises.mkdir(outerDirectoryPath);
        await createDirectoryWithSingleFile(
          directoryPath,
          "page.js",
          processedTemplate
        );
      }
    }
  }
}

module.exports = { generatePages };
