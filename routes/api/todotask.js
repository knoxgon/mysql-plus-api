const express = require('express');
const router = express.Router();
const apiCounter = require('../../misc/apiCounter');
const procedure = require('../../db/procedures');

//Show all data from the database
router.get('/show', (req, res, next) => {
  //Run the transaction
  procedure.runTranscationSelectAll().then(result => {
    
    apiCounter.visit();
    res.send({users: result})
  }).catch(error => {
    res.status(400).send({message: error})
  })
});

