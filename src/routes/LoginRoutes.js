const express = require('express');

const router = express.Router();

const LoginData = require('../utils/addLogin');

router.post('/', LoginData.tokenLogin);

module.exports = router;