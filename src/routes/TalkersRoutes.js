const express = require('express');

const router = express.Router();

const TalkersData = require('../utils/addTalkersData');
const { validateTalkerToken,
  validateTalkerName,
  validateTalkerAge,
  validateTalkerTalkWatchedAt,
  validateTalkerTalkRate } = require('../middlewares/validateTalkers');

router.get('/', TalkersData.getAllData);
router.get('/:id', TalkersData.getDataById);
router.post('/',
  validateTalkerToken,
  validateTalkerName,
  validateTalkerAge,
  validateTalkerTalkWatchedAt,
  validateTalkerTalkRate,
  TalkersData.newTalkers);

module.exports = router;