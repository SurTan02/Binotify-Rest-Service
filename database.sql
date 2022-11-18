DROP DATABASE IF EXISTS `database`;

CREATE DATABASE `database`;

CREATE TABLE `database`.`User`
(
    `user_id`   INT AUTO_INCREMENT,
    `email`     VARCHAR(256) NOT NULL,
    `password`  VARCHAR(256) NOT NULL,
    `username`  VARCHAR(256) NOT NULL,
    `name`      VARCHAR(256) NOT NULL,
    `isAdmin`   BOOLEAN      NOT NULL DEFAULT 0,
    PRIMARY KEY (`user_id`),
    UNIQUE(`email`),
    UNIQUE(`username`)
);

CREATE TABLE `database`.`Song`
(
    `song_id`       INT,
    `judul`         VARCHAR(64)  NOT NULL,
    `penyanyi_id`   INT          NOT NULL,
    `audio_path`    VARCHAR(256) NOT NULL,
    PRIMARY KEY (`song_id`),
    FOREIGN KEY (`penyanyi_id`) REFERENCES `User` (`user_id`)
);