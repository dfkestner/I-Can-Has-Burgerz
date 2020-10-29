const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "burger_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("Error Connecting:" + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;