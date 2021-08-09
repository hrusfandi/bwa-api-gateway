var express = require('express');
var router = express.Router();

const coursesHandler = require('./handler/courses');
const verifyToken = require('../middlewares/verifyToken');

router.post('/', verifyToken, coursesHandler.create);
router.put('/:id', verifyToken, coursesHandler.update);
router.delete('/:id', verifyToken, coursesHandler.destroy);
router.get('/', coursesHandler.getAll);
router.get('/:id', coursesHandler.get);

module.exports = router;
