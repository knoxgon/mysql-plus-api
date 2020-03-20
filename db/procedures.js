const connection = require('./index');

//Select everything from table and send
module.exports.runTranscationSelectAll = (table) => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM $1;', [table], (err,rows) => {
      if(err) reject(`Error occured while processing data from ${table};`);
      resolve(rows)
    });
  });  
}
