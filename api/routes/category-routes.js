const express = require('express');
const router  = express.Router();

const Category = require('../controllers').Category;

router.post('/create-category', Category.create);

router.get('/get-category', Category.get);

module.exports = router;