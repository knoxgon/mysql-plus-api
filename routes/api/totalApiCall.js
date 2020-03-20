const express = require('express');
const router = express.Router();
const apiCounter = require('../../misc/apiCounter');

router.get('/totalApiCall', function(req, res, next) {
  //Send the total API call
  res.send({totalApiUsage: apiCounter.display()})
});

module.exports = router;
