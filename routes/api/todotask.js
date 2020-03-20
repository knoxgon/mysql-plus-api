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

//Show data from the database from a specific user
router.get('/show/:owner', (req, res, next) => {
  //Store owner value
  const owner = req.params.owner;

  //Run the transaction
  procedure.runTranscationSelectSpecificOwner(owner).then(result => {

    apiCounter.visit();
    res.send({[owner]: result})
  }).catch(error => {
    res.status(400).send({message: error})
  })
});

//Show data from the database from a specific user
router.post('/add', (req, res, next) => {
  /**
   * The json body must match the following format
   * {
   *   owner: <the owner's name>
   *   task: <task description>
   * }
   */
  //Extract owner and task from the json body
  const owner = req.body.owner;
  const task  = req.body.task;
  //Run the transaction
  procedure.runTranscationAddTask(owner, task).then(result => {
    apiCounter.visit();
    res.send({data: result})
  }).catch(error => {
    res.status(400).send({message: error})
  })
});

//Show data from the database from a specific user
router.delete('/remove/:id', (req, res, next) => {
  //Extract id parameter
  const id = req.params.id

  //Run the transaction
  procedure.runTranscationRemoveTask(id).then(result => {

    apiCounter.visit();
    res.send({data: result})
  }).catch(error => {
    res.status(400).send({message: error})
  })
});

//Show data from the database from a specific user
router.patch('/update/:id', (req, res, next) => {
  //Extract id parameter
  const id = req.params.id
  //Extract task from body
  const task = req.body.task

  //Run the transaction
  procedure.runTranscationUpdateTask(task, id).then(result => {

    apiCounter.visit();
    res.send({data: result})
  }).catch(error => {
    res.status(400).send({message: error})
  })
});


module.exports = router;
