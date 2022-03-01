const mysql = require('mysql');
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'lenni',
  database: 'books'
});
module.exports = connection;