const path = require('path');
const readJsonData = require('./fs/readJsonData');
const writeJsonData = require('./fs/writeJsonData');

const talkersPath = path.join(__dirname, '..', 'talker.json');

const getAllData = async (_req, res) => {
  const data = await readJsonData(talkersPath);

  if (data.length === 0) {
    return res.status(200).json([]);
  }
  res.status(200).json(data);
};

const newTalkers = async (req, res) => {
  const data = await readJsonData(talkersPath);
  const { name, age, talk } = req.body;
  const newTalker = {
    id: data.length + 1,
    name,
    age,
    talk,
  };
  data.push(newTalker);
  await writeJsonData(talkersPath, data);
  res.status(201).json(newTalker);
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
  newTalkers,
};