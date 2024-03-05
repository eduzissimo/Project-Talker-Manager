const fs = require('fs').promises;

const writeJsonData = async (path, newData) => {
  try {
    await fs.writeFile(path, JSON.stringify(newData, null, 2));
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = writeJsonData;