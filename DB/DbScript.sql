CREATE USER 'skill_india_db_user'@'localhost' IDENTIFIED BY 'skillIndia@123';
GRANT ALL PRIVILEGES ON *.* TO 'skill_india_db_user'@'localhost'  WITH GRANT option;
CREATE USER 'skillIndia_user'@'localhost' IDENTIFIED BY 'skillIndiaTeam';
GRANT SELECT  ON `skill_india_app`.* TO 'skillIndia_user'@'localhost';
CREATE USER 'skillIndia_app_user'@'localhost' IDENTIFIED BY 'skillIndia@321$$#';
GRANT SELECT,UPDATE,INSERT,DELETE  ON `skill_india_app`.* TO 'skillIndia_app_user'@'localhost';
