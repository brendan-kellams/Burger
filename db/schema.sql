CREATE TABLE `burgers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `burger_name` VARCHAR (255) NOT NULL,
    `devoured` BOOLEAN DEFAULT FALSE,
    `date` TIMESTAMP,
    PRIMARY KEY (`id`)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Cheese Burger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Hamburger', FALSE);
INSERT INTO burgers (burger_name, devoured) VALUES ('Veggie Burger', FALSE);