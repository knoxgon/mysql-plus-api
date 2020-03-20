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

router.get('/custom_random/:num', function(req, res, next) {
  //Store the num's value from the parameter
  const number = req.params.num;
  //Randomize number according labb (0 to num)
  const randomNumber = Math.floor(Math.random() * number)

  apiCounter.visit()

  res.send({number: randomNumber})
});


module.exports = router;
