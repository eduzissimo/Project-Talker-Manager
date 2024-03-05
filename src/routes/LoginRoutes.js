const express = require('express');

const router = express.Router();

const LoginData = require('../utils/addLogin');
const validateLogin = require('../middlewares/validateLogins');

router.post('/', validateLogin, LoginData.tokenLogin);

module.exports = router;