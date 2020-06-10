var express = require('express');
var router = express.Router();
var Mags = require('../models/mag')

/* GET users listing. */
router.get('/', async (req, res) => {
  const mags = await Mags.find()
  console.log('inside mags')
  res.render('mags', { title: 'Express', mags:mags });
});

module.exports = router;
