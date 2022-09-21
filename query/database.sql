CREATE DATABASE IF NOT EXISTS db_api_node_express; /*Crea la base de sdatos si no existe*/ 
USE db_api_node_express;

CREATE TABLE employee (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) DEFAULT NULL,
  salary INT(5) DEFAULT NULL
);

DESCRIBE employee;

INSERT INTO employee(name, salary) VALUES ('Arnold', '1500');
INSERT INTO employee VALUES (1, 'Arnold', '1500'),(2, 'Cruz', '2000');