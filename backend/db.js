const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'adminweb',
  password: 'admin123',
  database: 'estudiantes'
});

module.exports = pool.promise();
