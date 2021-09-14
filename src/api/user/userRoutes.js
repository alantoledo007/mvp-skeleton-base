const express = require('express');
const router = express.Router();
const controller = require('./index');

router.get('/', controller.userAll);

router.get('/:id', controller.userById);

module.exports = router;