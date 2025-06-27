const fs = require("fs");

/**
 * @typedef {{nome: string}} InRecord
 * @typedef {{title: string, path: string}} OutRecord
 */

/**
 * @returns
 * @param {string} content
 */
function toLowerFirst(content) {
  return content.charAt(0).toLowerCase() + content.slice(1);
}

/**
 * @param {InRecord} record
 * @returns {OutRecord}
 */
function processRecord(record) {
  const { nome } = record;
  return {
    path: nome.split(/[- ']/).map(toLowerFirst).join("-"),
    title: nome,
  };
}

/**
 * @returns {Promise<InRecord[]>}
 * @param {string} inPath
 */
async function readInFile(inPath) {
  const data = await fs.promises.readFile(inPath);
  return JSON.parse(data);
}

/**
 * @returns
 * @param {string} outPath
 * @param {OutRecord[]} records
 */
async function writeOutFile(outPath, records) {
  const serialized = JSON.stringify(records);
  try {
    console.log(`writeOutFile: trying to delete out file.`);
    await fs.promises.unlink(outPath);
  } catch (err) {
    console.log(`writeOutFile: out file does not exist, skipping.`);
  }
  console.log(`writeOutFile: writing data to out file.`);
  await fs.promises.writeFile(outPath, serialized);
}

module.exports = { readInFile, writeOutFile, processRecord, toLowerFirst };
