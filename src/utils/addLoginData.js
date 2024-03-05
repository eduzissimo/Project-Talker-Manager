const path = require('path');
const crypto = require('crypto');

path.join(__dirname, '..', 'talker.json');

const getToken = () => crypto.randomBytes(8).toString('hex');

const tokenLogin = async (_req, res) => {
  const token = getToken();
  res.status(200).json({ token });
};

module.exports = {
  tokenLogin,
};