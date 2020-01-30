//Dependencies
var express = require("express");
var mysql = require("mysql");
var inquirer = require("inquirer");
const index = require("./index");
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
connection.connect(function (err) {
    if (err) {
        console.error("error connecting:" + err.stack);
        return;
    }
    console.log("Connected as id" + connection.threadId);
    //Runs the add Dept, Role, or Employee function defined below
    // addViewUpdate();
    addDRE();
});

//Inquirer Prompts for User

function addDRE() {
    inquirer
        .prompt({
            type: "list",
            name: "addUpdateView",
            message: "Choose an action",
            choices: [" Add Department", "Add Role", "Add Employee", "View Department", "View Role", "View Employee", "Update Employee Profile", "Exit"]
        })
        .then(function (answer) {
            switch (answer.addDRE) {
                case "add Departments":
                    addDept();
                    break;

                case "add Role":
                    addRole();
                    break;

                case "add Employee":
                    addEmployee();
                    break;

                case "view Dept":
                    viewDept();
                    break;
                case "view Role":
                    viewRole();
                    break;
                case "view Employee":
                    viewEmployee();
                    break;

                case "Update Employee":
                    updateEmployee();
                    break;

                case "Exit":
                    connection.end();
                    break;
            }
        });
    }

       
                
