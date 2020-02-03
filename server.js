//Dependencies
const {prompt}  = require("inquirer");
const db = require("./db");
const inquirer = require("inquirer");

//Inquirer Prompts for User
//User choice runs the functions below that are defined in index.js.

function addViewUpdate() {
    inquirer
        .prompt({
            name: "Add_dept",
            type: "list",
            message: "Choose an action from the list",
            choices: [
                "Add Department",
                "Add Role",
                "Add Employee",
                "View Department",
                "View Role",
                "View Employee",
                "Update Employee",
                "Exit"
            ]
        })//Calls functions based on user's choices
        .then(function (answer) {
            console.log("answer: " + answer.Add_dept);
            switch (answer.Add_dept) {
                case "Add Department":
                    inquirer.prompt({
                        type: "input",
                        message: "Name your new a department",
                        name: "deptName"
                    }).then(function (answer) {
                        return db.addDept(answer.deptName);
                    })

                case "Add Role":
                    inquirer.prompt({
                        type: "input",
                        message: "Name your new role",
                        name: "roleName"
                    }).then(function (answer) {
                        return db.addRole(answer.addRole);
                    })

                case "Add Employee":
                    inquirer.prompt({
                        type: "input",
                        message: "Name your new employee",
                        name: "employeeName"
                    }).then(function (answer) {
                        return db.addEmployee(answer.addEmployee);
                    })

                case "View Department":
                   inquirer.prompt({
                       type: "list",
                       message: "Select a department",
                       name: "viewDepartment",
                       choices: ["Accounting", "IT", "Sales"]
                   }).then(function (answer) {
                       return db.viewDept();
                       //should this be db.viewDept(); ?
                   })
                   

                case "View Role":
                    return db.viewRole();

                case "View Employee":
                    return db.viewEmployee();

                case "Update Employee":
                    return db.updateEmployee();

                case "Exit":
                    connection.end();
                    break;
            }
        })
};

addViewUpdate();