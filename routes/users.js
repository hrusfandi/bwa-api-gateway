var express = require('express');
var router = express.Router();
const {APP_NAME} = process.env;

const verifyToken = require('../middlewares/verifyToken');
const usersHandler = require('./handler/users');

router.post('/register', usersHandler.register);
router.post('/login', usersHandler.login);
router.put('/', verifyToken, usersHandler.update);
router.get('/', verifyToken, usersHandler.getUser);
router.post('/logout', verifyToken, usersHandler.logout);

module.exports = router;
