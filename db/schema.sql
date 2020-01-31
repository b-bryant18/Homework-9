DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department
(
    -- Department ID and name. --
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    deptName VARCHAR (30) NOT NULL
    
);
    CREATE TABLE role
    (
        -- Employee roles, like Microbiologist, Manager... --
        id INT NOT NULL PRIMARY KEY,
        title VARCHAR(30),
        salary DECIMAL (7, 2),
        -- Related to department ID in department table.(department_id - INT reference to department role belongs to) --
        department_id INT,
        FOREIGN KEY (department_id)
        REFERENCES department(id)
        ON DELETE CASCADE
        ON UPDATE NO ACTION
    );

    CREATE TABLE employee
    (
        -- Specific employee information, role ID is related to id in role table. --
        id INT PRIMARY KEY,
        firstName VARCHAR(30),
        lastName VARCHAR(30),
        role_id INT NOT NULL,
        -- This id is referencing another employee's id; the manager of this particular employee. --
        manager_id INT NULL
        -- NULL if employee is the manager
    );

-- //FK: Foreign Key is how you connect tables by ID, specify in the table. Column in primary key, dept id
-- PK: Primary Key is unique to a table
-- Employee tables has an FK unique to itself bc manager is an employee.

-- //Get server to work, get tables to work in workbench, make inquirer prompts, join tables