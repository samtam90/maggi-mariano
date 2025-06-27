const { readInFile, writeOutFile, processRecord } = require("../.auxiliary");

/**
 * @param {string} inPath
 * @param {string} outPath
 */
async function formatProvinces(inPath, outPath) {
  const inRecords = await readInFile(inPath);
  const outRecords = inRecords.map(processRecord);
  await writeOutFile(outPath, outRecords);
}

module.exports = formatProvinces;
