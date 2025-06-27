const { readInFile, writeOutFile, processRecord } = require("../.auxiliary");

/**
 * @typedef {{name: string, provincia: {nome: string}}} InRecord
 */

/**
 * @param {string} inPath
 * @param {string} outPath
 * @param {string} province
 */
async function formatComuni(inPath, outPath, province) {
  /**
   * @type {InRecord[]}
   */
  const inRecords = await readInFile(inPath);
  const outRecords = inRecords
    .filter((rec) => rec.provincia.nome === province)
    .map(processRecord);
  await writeOutFile(outPath, outRecords);
}

module.exports = formatComuni;
