const express = require('express');

const router = express.Router();
const validateLogin = require('../middlewares/validateLogins');

const LoginData = require('../utils/addLoginData');

router.post('/', validateLogin, LoginData.tokenLogin);

module.exports = router;