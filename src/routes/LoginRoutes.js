const express = require('express');

const router = express.Router();
const validateLogin = require('../middlewares/login/validateLogins');

const LoginData = require('../utils/login/addLoginData');

router.post('/', validateLogin, LoginData.tokenLogin);

module.exports = router;