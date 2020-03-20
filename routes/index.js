const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title1: 'Politicians', title2: 'Api' });
});

module.exports = router;
