var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "root",
  database: "burgers_db"
},
{
  host: "lsulnwdk5uwjw1r2k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "de387dkiuhaj8njy",
  password: "tdwfmhzg0ka14si0",
  database: "bzg9oc1t9eper91jh"
}

);

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;