const connection = require('./index');

//Select everything from table and send
module.exports.runTranscationSelectAll = (table) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM ??', [table], (err,rows) => {
      if(err) reject(`Error occured while processing data from ${table};`);
      resolve(rows)
    });
  });  
}

//Select tasks from a specific user by group task field
module.exports.runTranscationSelectSpecificOwner = (owner) => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT task FROM todolist where owner=\"${owner}\" group by task;`, (err,rows) => {
      /**
       * Let's say we have 3 records
       * owner: Volkan - task: "Buy milk"
       * owner: Volkan - task: "Take out trashes"
       * owner: Joe    - task: "Take a walk"
       * 
       * The example output where owner is Volkan
       * {
       *   task: "Buy milk",
       *   task: "Take out trashes",
       * }
       * 
       */
      if(rows.length === 0)
        reject(`No records were found for ${owner}`)
      if(err)
        reject(`Error occured while processing data from todolist;`);
      resolve(rows)
    });
  });  
}

//Add a new todolist item
module.exports.runTranscationAddTask = (owner, task) => {
  return new Promise((resolve, reject) => {
    //Since we are to manipulate the database, check for the fields
    if(!owner || !task) {
      reject(`Please provide correct fields [owner, task]`);
    }
    else {
      //When pushing data into the mysql, escaping single/double quotes are essential
      connection.query(`insert into todolist(owner, task) values(\"${owner}\", \"${task}\";)`, (err,result) => {
        if(err)
          reject(`Error occured while processing data into todolist`);
        resolve(`Task successfully assigned to ${owner}`)
      });
    }
  });  
}

//Remove a todolist element
module.exports.runTranscationRemoveTask = (id) => {
  return new Promise((resolve, reject) => {
    if(!id) {
      reject(`Please provide correct field [id]`);
    }
    else {
      connection.query(`delete from todolist where id=${id};`, (err,result) => {
         //In case of no id is found to modify, reject with a message
         if(result.affectedRows === 0)
          reject(`The id: [${id}] not found`);
        if(err)
          reject(`Error occured while processing data into todolist`);
        resolve(`Task successfully removed`)
      });
    }
  });  
}

//Update task description by providing new task description and target id to modify.
module.exports.runTranscationUpdateTask = (task, id) => {
  return new Promise((resolve, reject) => {
    if(!task || !id) {
      reject(`Please provide correct fields [task, id]`);
    }
    else {
      connection.query(`update todolist set task=\"${task}\" where id=${id};`, (err,result) => {
        //In case of no id is found to modify, reject with a message
        if(result.affectedRows === 0)
          reject(`The id: [${id}] not found`);
        if(err)
          reject(`Error occured while processing data into todolist`);
        resolve(`Task successfully updated`)
      });
    }
  });  
}
