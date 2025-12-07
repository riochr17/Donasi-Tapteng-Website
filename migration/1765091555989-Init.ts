import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1765091555989 implements MigrationInterface {
    name = 'Init1765091555989'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`PenggunaanDana\` (\`id\` int NOT NULL AUTO_INCREMENT, \`judul\` varchar(2000) NULL, \`deskripsi\` text NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Donatur\` (\`id\` int NOT NULL AUTO_INCREMENT, \`nama\` varchar(1024) NOT NULL, \`alamat\` text NULL, \`google_user_id\` varchar(200) NULL, \`email\` varchar(500) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`FotoPenggunaanDana\` (\`id\` int NOT NULL AUTO_INCREMENT, \`id_pengunaan_dana\` int NOT NULL, \`url_foto\` varchar(1024) NOT NULL, \`caption\` text NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Admin\` (\`id\` int NOT NULL AUTO_INCREMENT, \`username\` varchar(500) NOT NULL, \`password\` varchar(500) NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Donasi\` (\`id\` int NOT NULL AUTO_INCREMENT, \`id_donatur\` int NOT NULL, \`nama_donatur\` varchar(1024) NOT NULL, \`nama_bank\` varchar(1024) NOT NULL, \`nomor_rekening\` varchar(1024) NOT NULL, \`receipt_url\` varchar(1024) NULL, \`notes\` text NULL, \`nominal\` bigint NOT NULL, \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, \`verified_at\` timestamp NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`FotoPenggunaanDana\` ADD CONSTRAINT \`FK_86433c12e59000e36d1d24d07cb\` FOREIGN KEY (\`id_pengunaan_dana\`) REFERENCES \`PenggunaanDana\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Donasi\` ADD CONSTRAINT \`FK_f4e132e17a41fc0d169dbc7432e\` FOREIGN KEY (\`id_donatur\`) REFERENCES \`Donatur\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Donasi\` DROP FOREIGN KEY \`FK_f4e132e17a41fc0d169dbc7432e\``);
        await queryRunner.query(`ALTER TABLE \`FotoPenggunaanDana\` DROP FOREIGN KEY \`FK_86433c12e59000e36d1d24d07cb\``);
        await queryRunner.query(`DROP TABLE \`Donasi\``);
        await queryRunner.query(`DROP TABLE \`Admin\``);
        await queryRunner.query(`DROP TABLE \`FotoPenggunaanDana\``);
        await queryRunner.query(`DROP TABLE \`Donatur\``);
        await queryRunner.query(`DROP TABLE \`PenggunaanDana\``);
    }

}
