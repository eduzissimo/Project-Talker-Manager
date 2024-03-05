const fs = require('fs').promises;

const readJsonData = async (filePath) => {
  try {
    const rawData = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(rawData);
  } catch (error) {
    return [];
  }
};

const writeJsonData = async (filePath, data) => {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
};

module.exports = { readJsonData, writeJsonData };
