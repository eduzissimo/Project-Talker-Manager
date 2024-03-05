const express = require('express');

const router = express.Router();

const TalkersData = require('../utils/addTalkersData');

router.get('/', TalkersData.getAllData);
router.get('/:id', TalkersData.getDataById);

module.exports = router;