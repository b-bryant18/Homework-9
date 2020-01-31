const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employee_db"
});

//Initiate mySQl Connection
connection.connect(function (err) {
    if (err) {
        console.error("error connecting:" + err.stack);
        return;
    }
    console.log("Connected as id" + connection.threadId);
});

module.exports = connection;