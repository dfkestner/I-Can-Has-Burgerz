const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "rootroot",
        database: "burger_db"
    });
};

connection.connect(function(err) {
    if (err) {
        console.error("Error Connecting:" + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

module.exports = connection;