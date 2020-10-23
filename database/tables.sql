SET FOREIGN_KEY_CHECKS=0;

-- REMOVE PREVIOUS VERSION
DROP TABLE IF EXISTS `users`;
DROP TABLE IF EXISTS `tickets`;

-- CREATE NEW TABLES
CREATE TABLE `users` (
	`id` VARCHAR(36) NOT NULL,
	`firstname` VARCHAR(100) NOT NULL,
	`lastname` VARCHAR(100) NOT NULL,
	`email` VARCHAR(200),
	PRIMARY KEY (`id`)
);

CREATE TABLE `tickets` (
	`code` VARCHAR(20) NOT NULL,
	`type` ENUM('PROJECT', 'TASK', 'BUG') NOT NULL,
	`status` ENUM('OPEN', 'IN_PROGRESS', 'CLOSED') NOT NULL,
	`priority` INT(1) unsigned NOT NULL,
	`creator` VARCHAR(36) NOT NULL,
	`assignee` VARCHAR(36) NOT NULL,
	`title` VARCHAR(200),
	`description` VARCHAR(400),
	`parent` VARCHAR(20),
	PRIMARY KEY (`code`),
	CONSTRAINT fk_asignee FOREIGN KEY (assignee) REFERENCES users(id) ON DELETE CASCADE,
	CONSTRAINT fk_creator FOREIGN KEY (creator) REFERENCES users(id) ON DELETE CASCADE,
	KEY `index_by_assignee` (`assignee`) USING BTREE,
	KEY `index_by_creator` (`creator`) USING BTREE
);

SET FOREIGN_KEY_CHECKS=1;