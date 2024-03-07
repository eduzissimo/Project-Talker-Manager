const path = require('path');
const { readJsonData, writeJsonData } = require('../fs/jsonDataUtils');
const connection = require('../../db/talkerConnection');

const talkersPath = path.join(__dirname, '..', '..', 'talker.json');

const getAllData = async (_req, res) => {
  const data = await readJsonData(talkersPath);
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

const updateTalker = async (req, res) => {
  const { id } = req.params;
  const data = await readJsonData(talkersPath);
  const { name, age, talk } = req.body;
  const updatedTalker = {
    id: Number(id),
    name,
    age,
    talk,
  };
  const talkerIndex = data.findIndex((talker) => talker.id === Number(id));
  if (talkerIndex === -1) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  data[talkerIndex] = updatedTalker;
  await writeJsonData(talkersPath, data);
  res.status(200).json(updatedTalker);
};

const searchTalker = async (req, res) => {
  const { q } = req.query;
  const data = await readJsonData(talkersPath);
  const filteredTalkers = q
    ? data.filter((talker) => talker.name.toLowerCase().includes(q.toLowerCase()))
    : data;
  res.status(200).json(filteredTalkers);
};

const TalkerDB = async (_req, res) => {
  try {
    const conn = connection();
    const [rows] = await conn.query('SELECT * FROM talkers');
    const queryData = rows.map((row) => ({
      id: row.id,
      name: row.name,
      age: row.age,
      talk: {
        watchedAt: row.talk_watched_at,
        rate: row.talk_rate,
      },
    }));
    res.status(200).json(queryData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno no servidor' });
  }
};

module.exports = {
  getAllData,
  getDataById,
  newTalkers,
  updateTalker,
  searchTalker,
  TalkerDB,
};
