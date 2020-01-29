//Dependencies
var express = require ("express");
var mysql = require("mysql");
// var inquire = require('inquirer')

//Variable for running the express method
var app = express();

//Establishes the port for Heroku or local servers
var PORT = process.env.PORT || 3306;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "employee_db"
});

//Initiate mySQl Connection
connection.connect(function(err) {
    if (err) {
        console.error("error connecting:" + err.stack);
        return;
    }
    console.log("Connected as id" + connection.threadId);
    //Runs the add Dept, Role, or Employee function defined below
    addDRE();
});

//Inquirer Prompts for User

//Add Departments, Roles, Employees
function addDRE() {
    inquirer
    .prompt({
        type: "list",
        name: "add DRE",
        message: "Choose an item to add to the table",
        choices: ["Department", "Role", "Employee"]
    })
    .then(function(answer) {
        connection.query(
//Figure out how to add depts, roles, and employees here
        );
    });

//View Departments, Roles, and Employees

//WHERE SHOULD VIEWDRE(); BE CALLED?
function viewDRE() {
    inquirer
    .prompt({
        type: "list",
        name: "view DRE",
        message: "Choose an item to view",
        choices: ["Department", "Role", "Employee"]
    })
    .then(function(answer) {
        connection.query(
//Figure out how to add depts, roles, and employees here
        );
    });
}


