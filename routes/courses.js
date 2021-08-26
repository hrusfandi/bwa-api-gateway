var express = require('express');
var router = express.Router();

const coursesHandler = require('./handler/courses');
const verifyToken = require('../middlewares/verifyToken');
const roleFilter = require('../middlewares/permission');

router.post('/', verifyToken, roleFilter('admin'), coursesHandler.create);
router.put('/:id', verifyToken, roleFilter('admin'), coursesHandler.update);
router.delete('/:id', verifyToken, roleFilter('admin'), coursesHandler.destroy);

router.get('/', coursesHandler.getAll);
router.get('/:id', coursesHandler.get);

module.exports = router;
