const express = require('express');
const router = express.Router();
const apiCounter = require('../../misc/apiCounter');

router.get('/random', function(req, res, next) {
  //Randomize number according labb 0-1023
  const number = Math.floor(Math.random() * 1024)
  //Increase visit
  apiCounter.visit()
  //Default response is 200 so no need to specify it
  res.send({number})
});


module.exports = router;
