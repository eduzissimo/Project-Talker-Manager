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

const getDataById = async (req, res) => {
  const { id } = req.params;
  const data = await readJsonData(talkersPath);
  const foundTalker = data.find((talker) => talker.id === Number(id));

  if (!foundTalker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  res.status(200).json(foundTalker);
};

module.exports = {
  getAllData,
  getDataById,
};