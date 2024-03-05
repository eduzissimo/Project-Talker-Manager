const express = require('express');

const router = express.Router();

const TalkersData = require('../utils/addTalkersData');

router.get('/', TalkersData.getAllData);

module.exports = router;