const validateTalkerToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }
  if (authorization.length !== 16) {
    return res.status(401).json({ message: 'Token inválido' });
  }
  next();
};

const validateTalkerName = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }
  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
};

const validateTalkerAge = (req, res, next) => {
  const { age } = req.body;
  if (!age) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }
  if (!Number.isInteger(age) || age < 18) {
    return res.status(400).json(
      { message: 'O campo "age" deve ser um número inteiro igual ou maior que 18' },
    );
  }
  next();
};

const validateTalkerTalkWatchedAt = (req, res, next) => {
  const { talk } = req.body;
  const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
  if (!talk) {
    return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
  }
  if (!talk.watchedAt) {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  if (!dateRegex.test(talk.watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
};

const isRateUndefinedOrNull = (rate) => rate === undefined || rate === null;
const isRateInvalid = (rate) => rate < 1 || rate > 5 || rate % 1 !== 0;

const validateTalkerTalkRate = (req, res, next) => {
  const { talk } = req.body;
  if (isRateUndefinedOrNull(talk.rate)) {
    return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
  }
  if (isRateInvalid(talk.rate)) {
    return res.status(400).json(
      { message: 'O campo "rate" deve ser um número inteiro entre 1 e 5' },
    );
  }
  next();
};

module.exports = {
  validateTalkerToken,
  validateTalkerName,
  validateTalkerAge,
  validateTalkerTalkWatchedAt,
  validateTalkerTalkRate,
};