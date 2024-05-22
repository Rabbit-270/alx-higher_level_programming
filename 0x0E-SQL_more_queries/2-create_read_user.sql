-- Create a new database if it does not
-- exist and a new user.
-- Also update privileges
CREATE DATABASE IF NOT EXISTS hbtn_0d_2;
CREATE USER IF NOT EXISTS 'user_0d_2'@'localhost' IDENTIFIED BY 'user_0d_2_pwd';
GRANT SELECT ON hbtn_0d_2.* TO 'user_0d_2'@'localhost';
SHOW GRANTS FOR 'user_0d_2'@'localhost';
