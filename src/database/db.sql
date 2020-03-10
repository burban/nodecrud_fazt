CREATE DATABASE intramq;

USE intramq;
--USERS tables
CREATE TABLE users(
    id INT(11) not null,
    username varchar(16) not null,
    passwords varchar(60) not null,
    fullname varchar(100) not null
);

ALTER TABLE users 
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11) not null AUTO_INCREMENT, AUTO_INCREMENT = 1;

--   Links Enlaces
CREATE TABLE links(
    id INT(11) NOT NULL,
    title varchar(150) NOT NULL,
    url varchar(250) NOT NULL,
    descripcion TEXT,
    user_id int(11),
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE links
    ADD PRIMARY KEY(id);

ALTER TABLE links
    MODIFY id INT(11) not null AUTO_INCREMENT, AUTO_INCREMENT = 1;    