CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR (1000) NOT NULL,
    devoured BOOLEAN TRUE,
    date TIMESTAMP,
    PRIMARY KEY (id)
);