  
DROP DATABASE IF EXISTS employees_db;

-- Create the database task_saver_db and specified it for use.
CREATE DATABASE employees_db;

USE employees_db;

-- Create the table tasks.
CREATE TABLE employee (
  id int NOT NULL AUTO_INCREMENT,
  first_name varchar(30) NOT NULL,
  last_name varchar(30) NOT NULL,
  role_id INT NOT NULL,
  manager_id INT,
  FOREIGN KEY(department_id)
  REFERENCES department(id)
  ON DELETE CASCADE
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id int NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  FOREIGN KEY(department_id)
  REFERENCES department(id)
  ON DELETE CASCADE
  PRIMARY KEY (id)
);

CREATE TABLE department (
  id int NOT NULL AUTO_INCREMENT,
  dept_name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

