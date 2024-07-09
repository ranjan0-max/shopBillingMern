const express = require('express');
const ItemController = require('../Controllers/item.controller');
const { authJwt } = require('../Middleware/apiAuth.middleware');

const router = express.Router();

router
    .get('/', authJwt, ItemController.getAllItemList)
    .patch('/:id', authJwt, ItemController.updateItem)
    .post('/', authJwt, ItemController.createItem);

module.exports = router;
