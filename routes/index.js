var express = require('express');
var router = express.Router();
var Product = require('../models/product')

/* GET home page. */
router.get('/', async (req, res) => {
  const products = await Product.find()
  console.log(products)

  res.render('index', { title: 'Express', products:products });
});

module.exports = router;
