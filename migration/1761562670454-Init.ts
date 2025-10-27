import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1761562670454 implements MigrationInterface {
    name = 'Init1761562670454'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Unit\` (\`id\` int NOT NULL AUTO_INCREMENT, \`id_unit_parent\` int NULL, \`name\` varchar(500) NOT NULL, \`location\` varchar(500) NULL, \`description\` text NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Position\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(500) NOT NULL, \`description\` text NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Employee\` (\`id\` int NOT NULL AUTO_INCREMENT, \`id_supervisor\` int NULL, \`id_unit\` int NULL, \`id_position\` int NULL, \`sub_unit\` varchar(500) NOT NULL, \`employee_number\` varchar(500) NOT NULL, \`fullname\` varchar(500) NOT NULL, \`gender\` enum ('m', 'f') NOT NULL, \`birth_place\` varchar(500) NULL, \`birth_date\` date NULL, \`marital_status\` enum ('single', 'married', 'divorced', 'widowed') NULL, \`phone\` varchar(50) NULL, \`email\` varchar(500) NOT NULL, \`address\` text NULL, \`hire_date\` date NULL, \`resign_date\` date NULL, \`password\` varchar(500) NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Training\` (\`id\` int NOT NULL AUTO_INCREMENT, \`id_employee\` int NOT NULL, \`training_name\` varchar(500) NOT NULL, \`provider\` varchar(500) NULL, \`start_date\` date NULL, \`end_date\` date NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`LeaveRequest\` (\`id\` int NOT NULL AUTO_INCREMENT, \`id_employee\` int NOT NULL, \`type\` varchar(500) NOT NULL, \`reason\` text NULL, \`start_date\` date NULL, \`end_date\` date NULL, \`latest_status\` enum ('pending', 'approved', 'rejected', 'cancelled') NOT NULL DEFAULT 'pending', \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`LeaveRequestHistory\` (\`id\` int NOT NULL AUTO_INCREMENT, \`id_leave_request\` int NOT NULL, \`status\` enum ('pending', 'approved', 'rejected', 'cancelled') NOT NULL DEFAULT 'pending', \`notes\` text NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Certificate\` (\`id\` int NOT NULL AUTO_INCREMENT, \`id_employee\` int NOT NULL, \`certification_name\` varchar(500) NOT NULL, \`issuer\` varchar(500) NULL, \`issue_date\` date NULL, \`expiry_date\` date NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Attendance\` (\`id\` int NOT NULL AUTO_INCREMENT, \`id_employee\` int NOT NULL, \`date\` date NULL, \`clock_in\` timestamp NOT NULL, \`clock_out\` timestamp NULL, \`method\` enum ('manual', 'gps', 'fingerprint', 'face_recognition') NOT NULL DEFAULT 'manual', \`gps_lat\` decimal(10,8) NULL, \`gps_long\` decimal(10,8) NULL, \`location\` varchar(500) NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Education\` (\`id\` int NOT NULL AUTO_INCREMENT, \`id_employee\` int NOT NULL, \`school_name\` varchar(500) NOT NULL, \`field\` varchar(500) NULL, \`year\` int NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Admin\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(500) NOT NULL, \`password\` varchar(500) NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Overtime\` (\`id\` int NOT NULL AUTO_INCREMENT, \`id_employee\` int NOT NULL, \`date\` date NULL, \`start_time\` timestamp NULL, \`end_time\` timestamp NULL, \`hours\` decimal(5,2) NULL, \`purpose\` text NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`Unit\` ADD CONSTRAINT \`FK_62b1be30d9b6533005ef9359e1b\` FOREIGN KEY (\`id_unit_parent\`) REFERENCES \`Unit\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Employee\` ADD CONSTRAINT \`FK_39a20561bdadf7da67a4ee4fb5d\` FOREIGN KEY (\`id_supervisor\`) REFERENCES \`Employee\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Employee\` ADD CONSTRAINT \`FK_a92243e2e7acdc7bb4e824cf846\` FOREIGN KEY (\`id_unit\`) REFERENCES \`Unit\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Employee\` ADD CONSTRAINT \`FK_7a6b46f9c1e70f7cc1b14d930b2\` FOREIGN KEY (\`id_position\`) REFERENCES \`Position\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Training\` ADD CONSTRAINT \`FK_68888ea7761b41e76839b5285d7\` FOREIGN KEY (\`id_employee\`) REFERENCES \`Employee\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`LeaveRequest\` ADD CONSTRAINT \`FK_b6ac35d88a7f8b10b4142ecc737\` FOREIGN KEY (\`id_employee\`) REFERENCES \`Employee\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`LeaveRequestHistory\` ADD CONSTRAINT \`FK_53524f20d47537c9606daae4eb6\` FOREIGN KEY (\`id_leave_request\`) REFERENCES \`LeaveRequest\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Certificate\` ADD CONSTRAINT \`FK_c94207ca09032ae3a1025e0ac11\` FOREIGN KEY (\`id_employee\`) REFERENCES \`Employee\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Attendance\` ADD CONSTRAINT \`FK_e6ea1421dce673712ff1e5e5cb1\` FOREIGN KEY (\`id_employee\`) REFERENCES \`Employee\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Education\` ADD CONSTRAINT \`FK_1e451b9226fba60bdc9b88f48e8\` FOREIGN KEY (\`id_employee\`) REFERENCES \`Employee\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Overtime\` ADD CONSTRAINT \`FK_1d312f66cc64fcb4f5dc5687f9c\` FOREIGN KEY (\`id_employee\`) REFERENCES \`Employee\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Overtime\` DROP FOREIGN KEY \`FK_1d312f66cc64fcb4f5dc5687f9c\``);
        await queryRunner.query(`ALTER TABLE \`Education\` DROP FOREIGN KEY \`FK_1e451b9226fba60bdc9b88f48e8\``);
        await queryRunner.query(`ALTER TABLE \`Attendance\` DROP FOREIGN KEY \`FK_e6ea1421dce673712ff1e5e5cb1\``);
        await queryRunner.query(`ALTER TABLE \`Certificate\` DROP FOREIGN KEY \`FK_c94207ca09032ae3a1025e0ac11\``);
        await queryRunner.query(`ALTER TABLE \`LeaveRequestHistory\` DROP FOREIGN KEY \`FK_53524f20d47537c9606daae4eb6\``);
        await queryRunner.query(`ALTER TABLE \`LeaveRequest\` DROP FOREIGN KEY \`FK_b6ac35d88a7f8b10b4142ecc737\``);
        await queryRunner.query(`ALTER TABLE \`Training\` DROP FOREIGN KEY \`FK_68888ea7761b41e76839b5285d7\``);
        await queryRunner.query(`ALTER TABLE \`Employee\` DROP FOREIGN KEY \`FK_7a6b46f9c1e70f7cc1b14d930b2\``);
        await queryRunner.query(`ALTER TABLE \`Employee\` DROP FOREIGN KEY \`FK_a92243e2e7acdc7bb4e824cf846\``);
        await queryRunner.query(`ALTER TABLE \`Employee\` DROP FOREIGN KEY \`FK_39a20561bdadf7da67a4ee4fb5d\``);
        await queryRunner.query(`ALTER TABLE \`Unit\` DROP FOREIGN KEY \`FK_62b1be30d9b6533005ef9359e1b\``);
        await queryRunner.query(`DROP TABLE \`Overtime\``);
        await queryRunner.query(`DROP TABLE \`Admin\``);
        await queryRunner.query(`DROP TABLE \`Education\``);
        await queryRunner.query(`DROP TABLE \`Attendance\``);
        await queryRunner.query(`DROP TABLE \`Certificate\``);
        await queryRunner.query(`DROP TABLE \`LeaveRequestHistory\``);
        await queryRunner.query(`DROP TABLE \`LeaveRequest\``);
        await queryRunner.query(`DROP TABLE \`Training\``);
        await queryRunner.query(`DROP TABLE \`Employee\``);
        await queryRunner.query(`DROP TABLE \`Position\``);
        await queryRunner.query(`DROP TABLE \`Unit\``);
    }

}
