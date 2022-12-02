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

INSERT INTO `database`.`User` (`email`, `password`, `username`, `name`, `isAdmin`) VALUES ('binotify88@gmail.com', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'admin', 'admin', 1);
INSERT INTO `database`.`User` (`email`, `password`, `username`, `name`, `isAdmin`) VALUES ('bri@gmail.com', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'bri', 'bri', 0);
INSERT INTO `database`.`User` (`email`, `password`, `username`, `name`, `isAdmin`) VALUES ('sur@gmail.com', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'sur', 'sur', 0);
INSERT INTO `database`.`User` (`email`, `password`, `username`, `name`, `isAdmin`) VALUES ('fikron@gmail.com', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'fikron', 'fikron', 0);
INSERT INTO `database`.`User` (`email`, `password`, `username`, `name`, `isAdmin`) VALUES ('viel@gmail.com', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'viel', 'viel', 0);
INSERT INTO `database`.`User` (`email`, `password`, `username`, `name`, `isAdmin`) VALUES ('celo@gmail.com', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'celo', 'celo', 0);
INSERT INTO `database`.`User` (`email`, `password`, `username`, `name`, `isAdmin`) VALUES ('wiwid@gmail.com', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'wiwid', 'wiwid', 0);
INSERT INTO `database`.`User` (`email`, `password`, `username`, `name`, `isAdmin`) VALUES ('dzaki@gmail.com', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'dzaki', 'dzaki', 0);
INSERT INTO `database`.`User` (`email`, `password`, `username`, `name`, `isAdmin`) VALUES ('rifqi@gmail.com', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'rifqi', 'rifqi', 0);
INSERT INTO `database`.`User` (`email`, `password`, `username`, `name`, `isAdmin`) VALUES ('malik@gmail.com', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'malik', 'malik', 0);
INSERT INTO `database`.`User` (`email`, `password`, `username`, `name`, `isAdmin`) VALUES ( 'akbar@gmail.com', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'akbar', 'akbar', 0);
INSERT INTO `database`.`User` (`email`, `password`, `username`, `name`, `isAdmin`) VALUES ( 'hafidz@gmail.com', '8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918', 'hafidz', 'hafidz', 0);

INSERT INTO `database`.`Song` (`judul`, `penyanyi_id`, `audio_path`) VALUES (`Summer`, 2, `public/Summer.mp3`)
INSERT INTO `database`.`Song` (`judul`, `penyanyi_id`, `audio_path`) VALUES (`We Will Rock You`, 3, `public/Summer.mp3`)
INSERT INTO `database`.`Song` (`judul`, `penyanyi_id`, `audio_path`) VALUES (`Killer Queen`, 3, `public/Summer.mp3`)
INSERT INTO `database`.`Song` (`judul`, `penyanyi_id`, `audio_path`) VALUES (`We Are the Champions`, 2, `public/Summer.mp3`)
INSERT INTO `database`.`Song` (`judul`, `penyanyi_id`, `audio_path`) VALUES (`Let it Be`, 2, `public/Summer.mp3`)
INSERT INTO `database`.`Song` (`judul`, `penyanyi_id`, `audio_path`) VALUES (`Hey Jude`, 3, `public/Summer.mp3`)
INSERT INTO `database`.`Song` (`judul`, `penyanyi_id`, `audio_path`) VALUES (`Winter`, 2, `public/Summer.mp3`)
INSERT INTO `database`.`Song` (`judul`, `penyanyi_id`, `audio_path`) VALUES (`Sepatu`, 3, `public/Summer.mp3`)
INSERT INTO `database`.`Song` (`judul`, `penyanyi_id`, `audio_path`) VALUES (`Diam`, 3, `public/Summer.mp3`)
INSERT INTO `database`.`Song` (`judul`, `penyanyi_id`, `audio_path`) VALUES (`Mars HMIF`, 2, `public/Summer.mp3`)
INSERT INTO `database`.`Song` (`judul`, `penyanyi_id`, `audio_path`) VALUES (`Mars HMJ`, 2, `public/Summer.mp3`)
INSERT INTO `database`.`Song` (`judul`, `penyanyi_id`, `audio_path`) VALUES (`Happy`, 4, `public/Summer.mp3`)
INSERT INTO `database`.`Song` (`judul`, `penyanyi_id`, `audio_path`) VALUES (`Sepatu Baru`, 3, `public/Summer.mp3`)
INSERT INTO `database`.`Song` (`judul`, `penyanyi_id`, `audio_path`) VALUES (`Diam Seribu Bahasa`, 3, `public/Summer.mp3`)
INSERT INTO `database`.`Song` (`judul`, `penyanyi_id`, `audio_path`) VALUES (`Earth`, 2, `public/Summer.mp3`)
INSERT INTO `database`.`Song` (`judul`, `penyanyi_id`, `audio_path`) VALUES (`Fall`, 2, `public/Summer.mp3`)
INSERT INTO `database`.`Song` (`judul`, `penyanyi_id`, `audio_path`) VALUES (`Sad`, 4, `public/Summer.mp3`)
INSERT INTO `database`.`Song` (`judul`, `penyanyi_id`, `audio_path`) VALUES (`Sepatu Lama`, 3, `public/Summer.mp3`)
INSERT INTO `database`.`Song` (`judul`, `penyanyi_id`, `audio_path`) VALUES (`Silent`, 3, `public/Summer.mp3`)
INSERT INTO `database`.`Song` (`judul`, `penyanyi_id`, `audio_path`) VALUES (`Venus`, 2, `public/Summer.mp3`)
INSERT INTO `database`.`Song` (`judul`, `penyanyi_id`, `audio_path`) VALUES (`Jatuh`, 2, `public/Summer.mp3`)
INSERT INTO `database`.`Song` (`judul`, `penyanyi_id`, `audio_path`) VALUES (`Mad`, 4, `public/Summer.mp3`)
INSERT INTO `database`.`Song` (`judul`, `penyanyi_id`, `audio_path`) VALUES (`Gajah`, 3, `public/Summer.mp3`)
INSERT INTO `database`.`Song` (`judul`, `penyanyi_id`, `audio_path`) VALUES (`Omega`, 3, `public/Summer.mp3`)
INSERT INTO `database`.`Song` (`judul`, `penyanyi_id`, `audio_path`) VALUES (`Close`, 2, `public/Summer.mp3`)
INSERT INTO `database`.`Song` (`judul`, `penyanyi_id`, `audio_path`) VALUES (`Sky`, 2, `public/Summer.mp3`)
INSERT INTO `database`.`Song` (`judul`, `penyanyi_id`, `audio_path`) VALUES (`Alpha`, 4, `public/Summer.mp3`)




