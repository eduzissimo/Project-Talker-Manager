const express = require('express');

const router = express.Router();

const {
  getAllData,
  searchTalker,
  getDataById,
  newTalkers,
  updateTalker,
} = require('../utils/talkers/addTalkersData');

const { deleteTalker } = require('../utils/talkers/deleteTalkers');

const {
  validateTalkerToken,
  validateTalkerName,
  validateTalkerAge,
  validateTalkerTalkWatchedAt,
  validateTalkerTalkRate,
} = require('../middlewares/talkers/validateTalkers');

router.get('/', getAllData);
router.get('/search', validateTalkerToken, searchTalker);
router.get('/:id', getDataById);
router.post(
  '/',
  validateTalkerToken,
  validateTalkerName,
  validateTalkerAge,
  validateTalkerTalkWatchedAt,
  validateTalkerTalkRate,
  newTalkers,
);
router.put(
  '/:id',
  validateTalkerToken,
  validateTalkerName,
  validateTalkerAge,
  validateTalkerTalkWatchedAt,
  validateTalkerTalkRate,
  updateTalker,
);
router.delete('/:id', validateTalkerToken, deleteTalker);

module.exports = router;