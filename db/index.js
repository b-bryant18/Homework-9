const connection = require("./connection");
const inquirer = require("inquirer");

class db {
    constructor(connection) {
        this.connection = connection;
    }
    //Add Functions
    addDept(dept) {
            return this.connection.query("INSERT INTO department SET ?", {deptName: dept})
        }

    addRole(role) {
            return this.connection.query("INSERT INTO role SET ?", {title: role})
        }
    addEmployee(employee) {
            return this.connection.query("INSERT INTO employee SET ?", {firstname: employee})
        }

    //View Functions
    viewDept(department) {
            return this.connection.query("SELECT * FROM department WHERE deptName = ?", [department])
        }
    viewRole(role) {
            return this.connection.query("SELECT * FROM role WHERE title = ?", [role])
        }

    viewEmployee(employee) {
            return this.connection.query("SELECT * FROM employee WHERE firstName = ?", [employee])
        }

    //Update Employee Profile function
    updateEmployee(employeeId, roleId) {
            return this.connection.query("UPDATE employee SET role_id = ? WHERE id = ?", [employeeId, roleId])
        }
}

module.exports = new db(connection);