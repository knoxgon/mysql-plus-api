const mysql = require('mysql')
const connection = mysql.createConnection({
  host: '<database host>',
  user: '<database username>',
  password: '<database password>',
  database: '<database name>'
})

connection.connect((err) => {
  if(err){
    console.log('Error connecting to database');
    return;
  }
  console.log('Connection OK to database')
})

module.exports = connection
