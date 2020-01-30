module.exports = function index {
    function addDept() {
        console.log("Adding new department\n");
        var query = connection.query(
            "INSERT INTO department SET ?",
            {
                deptName: "",
                //user's new department name here
            },
            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + "department added\n");
            })
        console.log(query.sql);
    }

    function addRole() {
        console.log("Adding new role\n");
        connection.query(
            "INSERT INTO role SET ?",
            {
                title: "",
                salary: "",
                department_id: "",
            },
            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + "department added\n");
            })
        console.log(query.sql);
    }
    function addEmployee() {
        console.log("Adding new role\n");
        connection.query(
            "INSERT INTO Employee SET ?",
            {
                firstName: "",
                lastName: "",
                role_id: "",
                manager_id: "",
            },
            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + "department added\n");
            })
        console.log(query.sql);
    }

    //View Functions
    function viewDept() {
        connection.query(
            "SELECT * FROM department WHERE deptName = ?",
            function (err, res) {
                if (err) throw err;
            })
    }
    function viewRole() {
        connection.query(
            "SELECT * FROM department WHERE title = ?",
            function (err, res) {
                if (err) throw err;
            })
    }

    function viewEmployee() {
        connection.query(
            "SELECT * FROM department WHERE firstname = ?",
            function (err, res) {
                if (err) throw err;
            })
    }

    //Update Employee Profile function
    function updateEmployee() {
        console.log("Adding new role\n");
        connection.query(
            "UPDATE employee SET ?",
            {
                firstName: "",
                lastName: "",
                role_id: "",
                manager_id: "",
            },
            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + "employee added\n");
            }
        )
    }
}
