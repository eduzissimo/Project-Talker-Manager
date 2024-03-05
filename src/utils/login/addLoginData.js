const crypto = require('crypto');

const getToken = () => crypto.randomBytes(8).toString('hex');
const tokenLogin = (_req, res) => {
  const token = getToken();
  res.status(200).json({ token });
};

module.exports = { tokenLogin };