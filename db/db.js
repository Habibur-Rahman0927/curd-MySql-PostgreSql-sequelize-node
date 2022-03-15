const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'asdf1234',
  database : 'curd',
  multipleStatements:true
});


module.exports = connection;