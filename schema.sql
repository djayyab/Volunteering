CREATE DATABASE test;

USE test;

-- CREATE TABLE items (
--   id int NOT NULL AUTO_INCREMENT,
--   quantity integer NOT NULL,
--   description varchar(50) NOT NULL,
--   PRIMARY KEY (ID)
-- );


 CREATE TABLE Volunteering (
   Volunteering_id int NOT NULL AUTO_INCREMENT , 
   PRIMARY KEY (Volunteering_id),
   Category VARCHAR(20),
   Description VARCHAR(20),
   address VARCHAR(20),
  
   company_id int,
    FOREIGN KEY (company_id),
    REFERENCES company(company_id)
  );

  CREATE TABLE user (
    user_id int NOT NULL,
    name VARCHAR(20),
    email VARCHAR(20),
    password VARCHAR(20),
    PRIMARY KEY (user_id)
   
); 



 CREATE TABLE company(
    company_id int NOT NULL,
    name VARCHAR(20),
    email VARCHAR(20),
    password VARCHAR(20),
    PRIMARY KEY (company_id)
   
);

ALTER TABLE company
RENAME COLUMN name TO username;

ALTER TABLE company
MODIFY Description VARCHAR(1000);

ALTER TABLE user
  ADD last_login datetime;


ALTER TABLE Volunteering
MODIFY Description VARCHAR(1000);



CREATE TABLE user_Volunteering_work (
   Volunteering_id int, 
   user_id int,
   Acceptance BOOLEAN,
    FOREIGN KEY (Volunteering_id)
    REFERENCES Volunteering(Volunteering_id),
    FOREIGN KEY (user_id)
    REFERENCES user(user_id)
  );

  ALTER TABLE user
  ADD last_login datetime;


  ALTER TABLE company
  ADD last_login datetime;


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

 ALTER TABLE user
DROP COLUMN name;


 ALTER TABLE user
ADD  username VARCHAR(20);


ALTER TABLE user
ADD  password VARCHAR(500);

ALTER TABLE user
ADD  password VARCHAR(500);

AUTO_INCREMENT

 ALTER TABLE company
ADD  registered VARCHAR(20);



insert into user(user_id,username,password) VALUES(1,"Doaa","123");