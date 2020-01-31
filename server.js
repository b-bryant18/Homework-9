//Dependencies
const { prompt } = require("inquirer");
const db = require("./db");

//Runs the add Dept, Role, or Employee function defined below
// addViewUpdate();
addDRE();

//Inquirer Prompts for User
async function loadPrompts() {
    const { choice } = await prompt([
        {
            type: "list",
            name: "addUpdateView",
            message: "Choose an action",
            choices: [
                {
                    name: "Add Department",
                    value: "add_Department"
                },
                {
                    name: "Add Role",
                    value: "add_role"
                },
                {
                    name: "Add Employee",
                    value: "add_Employee"
                },
                {
                    name: "View Department",
                    value: "view_Department"
                },
                {
                    name: "View Role",
                    value: "view_Role"
                },
                {
                    name: "View Employee",
                    value: "view_Employee"
                },
                {
                    name: "Update Employee",
                    value: "update_Employee"
                }
            ]
        }
    ])

    switch (choice) {
        case "add Departments":
            return db.addDept();

        case "add Role":
            return db.addRole();

        case "add Employee":
            return db.addEmployee();

        case "view Dept":
            return db.viewDept();

        case "view Role":
            return db.viewRole();

        case "view Employee":
            return db.viewEmployee();

        case "Update Employee":
            return db.updateEmployee();

        case "Exit":
            connection.end();
            break;
    }



