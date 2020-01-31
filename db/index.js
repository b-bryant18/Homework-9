const connection = require("./connection");

class db {
    constructor(connection) {
        this.connection = connection;
    }
    addDept(department) {
        return this.connection.query("INSERT INTO department SET ?", department)
    }

    addRole(role) {
        return this.connection.query("INSERT INTO role SET ?", role)
    }
    addEmployee(employee) {
        return this.connection.query("INSERT INTO employee SET ?", employee)
    }

    //View Functions
    viewDept(department) {
       return this.connection.query("SELECT * FROM department WHERE deptName = ?", department)
    }
    viewRole(role) {
        return this.connection.query("SELECT * FROM role WHERE title = ?", role)
    }

    viewEmployee(employee) {
        return this.connection.query("SELECT * FROM employee WHERE firstName = ?", employee)
    }

    //Update Employee Profile function
    updateEmployee(employeeId, roleId) {
        return this.connection.query("UPDATE employee SET role_id = ? WHERE id = ?", [employeeId, roleId])
    }
}

module.exports = new db(connection);