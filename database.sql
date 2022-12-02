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
    `song_id`       INT AUTO_INCREMENT,
    `judul`         VARCHAR(64)  NOT NULL,
    `penyanyi_id`   INT          NOT NULL,
    `audio_path`    VARCHAR(256) NOT NULL,
    PRIMARY KEY (`song_id`),
    FOREIGN KEY (`penyanyi_id`) REFERENCES `User` (`user_id`)
);

INSERT INTO `database`.`User` (`user_id`, `email`, `password`, `username`, `name`, `isAdmin`) VALUES (0, 'binotify88@gmail.com', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'admin', 'admin', 1);
INSERT INTO `database`.`User` (`user_id`, `email`, `password`, `username`, `name`, `isAdmin`) VALUES (1, 'bri@gmail.com', '0f8812a927c250196f935b61a6016d849d08989e67cdf810521f9d4b8e68ee7b', 'bri', 'bri', 0);
INSERT INTO `database`.`User` (`user_id`, `email`, `password`, `username`, `name`, `isAdmin`) VALUES (2, 'sur@gmail.com', '0f8812a927c250196f935b61a6016d849d08989e67cdf810521f9d4b8e68ee7b', 'sur', 'sur', 0);
INSERT INTO `database`.`User` (`user_id`, `email`, `password`, `username`, `name`, `isAdmin`) VALUES (3, 'fikron@gmail.com', '0f8812a927c250196f935b61a6016d849d08989e67cdf810521f9d4b8e68ee7b', 'fikron', 'fikron', 0);
INSERT INTO `database`.`User` (`user_id`, `email`, `password`, `username`, `name`, `isAdmin`) VALUES (4, 'viel@gmail.com', '0f8812a927c250196f935b61a6016d849d08989e67cdf810521f9d4b8e68ee7b', 'viel', 'viel', 0);
INSERT INTO `database`.`User` (`user_id`, `email`, `password`, `username`, `name`, `isAdmin`) VALUES (5, 'celo@gmail.com', '0f8812a927c250196f935b61a6016d849d08989e67cdf810521f9d4b8e68ee7b', 'celo', 'celo', 0);
INSERT INTO `database`.`User` (`user_id`, `email`, `password`, `username`, `name`, `isAdmin`) VALUES (6, 'wiwid@gmail.com', '0f8812a927c250196f935b61a6016d849d08989e67cdf810521f9d4b8e68ee7b', 'wiwid', 'wiwid', 0);
INSERT INTO `database`.`User` (`user_id`, `email`, `password`, `username`, `name`, `isAdmin`) VALUES (7, 'dzaki@gmail.com', '0f8812a927c250196f935b61a6016d849d08989e67cdf810521f9d4b8e68ee7b', 'dzaki', 'dzaki', 0);
INSERT INTO `database`.`User` (`user_id`, `email`, `password`, `username`, `name`, `isAdmin`) VALUES (8, 'rifqi@gmail.com', '0f8812a927c250196f935b61a6016d849d08989e67cdf810521f9d4b8e68ee7b', 'rifqi', 'rifqi', 0);
INSERT INTO `database`.`User` (`user_id`, `email`, `password`, `username`, `name`, `isAdmin`) VALUES (9, 'malik@gmail.com', '0f8812a927c250196f935b61a6016d849d08989e67cdf810521f9d4b8e68ee7b', 'malik', 'malik', 0);
INSERT INTO `database`.`User` (`user_id`, `email`, `password`, `username`, `name`, `isAdmin`) VALUES (10, 'akbar@gmail.com', '0f8812a927c250196f935b61a6016d849d08989e67cdf810521f9d4b8e68ee7b', 'akbar', 'akbar', 0);
INSERT INTO `database`.`User` (`user_id`, `email`, `password`, `username`, `name`, `isAdmin`) VALUES (11, 'hafidz@gmail.com', '0f8812a927c250196f935b61a6016d849d08989e67cdf810521f9d4b8e68ee7b', 'hafidz', 'hafidz', 0);






