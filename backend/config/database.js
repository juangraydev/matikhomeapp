// get the client
const mysql = require('mysql2');
 
// create the connection to database
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// now get a Promise wrapped instance of that pool
const promisePool = pool.promise();

module.exports = promisePool;