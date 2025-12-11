import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateDonasi1765431703616 implements MigrationInterface {
    name = 'UpdateDonasi1765431703616'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Donatur\` ADD \`kewarganegaraan\` varchar(100) NOT NULL DEFAULT 'Indonesia'`);
        await queryRunner.query(`ALTER TABLE \`Donasi\` ADD \`mata_uang\` varchar(3) NOT NULL DEFAULT 'IDR'`);
        await queryRunner.query(`ALTER TABLE \`Donasi\` ADD \`nilai_konversi_idr\` bigint NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Donasi\` DROP COLUMN \`nilai_konversi_idr\``);
        await queryRunner.query(`ALTER TABLE \`Donasi\` DROP COLUMN \`mata_uang\``);
        await queryRunner.query(`ALTER TABLE \`Donatur\` DROP COLUMN \`kewarganegaraan\``);
    }

}
