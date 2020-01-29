//Dependencies
var express = require("express");
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
connection.connect(function (err) {
    if (err) {
        console.error("error connecting:" + err.stack);
        return;
    }
    console.log("Connected as id" + connection.threadId);
    //Runs the add Dept, Role, or Employee function defined below
    addViewUpdate();
});

//Inquirer Prompts for User

//Add Departments, Roles, Employees
//WHERE DO I ADD CONNECTION.QUERY?
function addViewUpdate() {
    inquirer
        .prompt({
            type: "list",
            name: "addViewUpdate",
            message: "Would you like to add DRE, view DRE, or update an employee profile?",
            choices: ["Add", "View", "Update", "Exit"]
        })
        .then(function (answer) {
            //Add the item that the user chose
            if (answer.addViewUpdate === "Add") {
                addDRE();
            }
            else if (answer.addViewUpdate === "View") {
              viewDRE();
            }
            else if (answer.addViewUpdate === "Update") {
                updateEmployee();
            }
            else {
                connection.end();
            }
        });
}
function addDRE() {
    inquirer
        .prompt({
            type: "list",
            name: "addDRE",
            message: "Choose an item to add",
            choices: ["Department", "Role", "Employee", "Exit"]
        })
        .then(function (answer) {
            if (answer.addDRE === "Department") {
                //ADD DEPT
            }
            else if (answer.addDRE === "Role") {
                //ADD ROLE
            }
            else if (answer.addDRE === "Employee") {
                //ADD EMPLOYEE
            }
            else {
                connection.end();
            }
            viewDRE();
        });

        function viewDRE() {
            inquirer
                .prompt({
                    type: "list",
                    name: "viewDRE",
                    message: "Choose an item to view",
                    choices: ["Department", "Role", "Employee", "Exit"]
                })
                .then(function (answer) {
                    if (answer.viewDRE === "Department") {
                        //VIEW DEPT
                        connection.query("SELECT * FROM .......", function(err, data){
                            //We need to get the data back from the server before calling updateEmployee
                            updateEmployee();
                        })
                    }
                    else if (answer.viewDRE === "Role") {
                        //VIEW DEPT
                    }
                    else if (answer.viewDRE === "Employee") {
                        //VIEW DEPT
                    }
                    else {
                        connection.end();
                    }
                    
                });

                function updateEmployee() {
                    inquirer
                        .prompt({
                            type: "list",
                            name: "updateEmployee",
                            message: "Choose an employee to update",
                            //Add list of employees here
                            choices: ["Department", "Role", "Employee", "Exit"]
                        })
                        .then(function (answer) {
                            if (answer.updateEmployee === "Department") {
                                //VIEW DEPT
                            }
                            else if (answer.updateEmployee === "Role") {
                                //VIEW DEPT
                            }
                            else if (answer.updateEmployee === "Employee") {
                                //VIEW DEPT
                            }
                            else {
                                connection.end();
                            }
                        });
                
        

    //Need to call functions in here but can define them elsewhere
    
}



//View Departments, Roles, and Employees


