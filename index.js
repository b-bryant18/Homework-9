module.exports = function(app){
function addDept()
function addRole()
function addEmployee()
function viewDept()
function viewRole()
function viewEmployee()
function updateEmployee()

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
                    connection.query("SELECT * FROM .......", function (err, data) {
                        //We need to get the data back from the server before calling updateEmployee
                        updateEmployee();
                    })
                }
                else if (answer.viewDRE === "Role") {
                    connection.query("SELECT * FROM .......", function (err, data) {
                    })
                }
                else if (answer.viewDRE === "Employee") {
                    connection.query("SELECT * FROM .......", function (err, data) {
                    })
                }
                else {
                    connection.end();
                }
            });
}
