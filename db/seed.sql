USE employee_db;

INSERT INTO department (deptName)
VALUES ("Accounting"),( "Sales"),("IT");

INSERT INTO role (title, salary, department_id)
VALUES 
("Accounting-Manager", 90000, 1),
("Accountant", 70000, 1),
("Accounting-Intern", 55000, 1),
("Sales-Manager", 90000, 2),
("Salesman", 65000, 2),
("Sales-Intern", 50000, 2),
("IT-Manager", 90000, 3),
("IT-Engineer", 75000, 3),
("IT-Intern", 50000, 3);

INSERT INTO employee (firstName, lastName, role_id, manager_id)
VALUES
("Bob", "Belcher",     1, NULL),
("Linda", "Belcher"    2, 1),
("Tina", "Belcher" 3, 1),
("Mags", "Smith", 4, NULL),
("Kimi", "Smith" 5, 4),
("Josh", "Smith" 6, 4),
("Jerry", "Seinfeld", 7, NULL),
("George", "Seinfeld" 8, 7),
("Elaine", "Seinfeld" 9, 7),




