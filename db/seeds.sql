INSERT INTO department (name) VALUES ('Sales');
INSERT INTO department (name) VALUES ('Engineering');
INSERT INTO department (name) VALUES ('Marketing');

INSERT INTO role (title, salary, department_id) VALUES ('Sales Associate', 50000, 1);
INSERT INTO role (title, salary, department_id) VALUES ('Software Engineer', 80000, 2);
INSERT INTO role (title, salary, department_id) VALUES ('Marketing Specialist', 60000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('John', 'Doe', 1, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jane', 'Smith', 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Mike', 'Johnson', 3, 1);