const path = require('path');
const readJsonData = require('./fs/readJsonData');
const writeJsonData = require('./fs/writeJsonData');

const talkersPath = path.join(__dirname, '..', 'talker.json');

const deleteTalker = async (req, res) => {
  const { id } = req.params;
  const data = await readJsonData(talkersPath);

  const talkerIndex = data.findIndex((talker) => talker.id === Number(id));

  if (talkerIndex === -1) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  data.splice(talkerIndex, 1);
  await writeJsonData(talkersPath, data);
  res.status(204).send();
};

module.exports = {
  deleteTalker,
};