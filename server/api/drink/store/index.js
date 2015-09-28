'use strict';

var express = require('express');
var controller = require('./store.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/:store_id/products/:product_id/inventory', controller.inventory);

module.exports = router;
