const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",

  // Default 3306, change if needed
  port: 3306,

  // Local username
  user: "root",

  // Your password
  password: "vegetable",
  database: "employees_db",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log(`connected at ${connection.threadId}\n`);
});

module.exports = connection;