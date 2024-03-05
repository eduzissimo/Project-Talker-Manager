const path = require('path');
const readJsonData = require('./readJsonData');

const talkersPath = path.join(__dirname, '..', 'talker.json');

const getAllData = async (_req, res) => {
  const data = await readJsonData(talkersPath);

  if (data.length === 0) {
    return res.status(200).json([]);
  }
  res.status(200).json(data);
};

module.exports = {
  getAllData,
};