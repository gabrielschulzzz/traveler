import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterPlacesEntityAddDatesHours1621194107796 implements MigrationInterface {
    name = 'AlterPlacesEntityAddDatesHours1621194107796'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "domingo"`);
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "segunda"`);
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "terca"`);
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "quarta"`);
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "quinta"`);
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "sexta"`);
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "sabado"`);
        await queryRunner.query(`ALTER TABLE "places" ADD "domingoOpen" boolean`);
        await queryRunner.query(`ALTER TABLE "places" ADD "domingoFrom" character varying`);
        await queryRunner.query(`ALTER TABLE "places" ADD "domingoUntil" character varying`);
        await queryRunner.query(`ALTER TABLE "places" ADD "segundaOpen" boolean`);
        await queryRunner.query(`ALTER TABLE "places" ADD "segundaFrom" character varying`);
        await queryRunner.query(`ALTER TABLE "places" ADD "segundaUntil" character varying`);
        await queryRunner.query(`ALTER TABLE "places" ADD "tercaOpen" boolean`);
        await queryRunner.query(`ALTER TABLE "places" ADD "tercaFrom" character varying`);
        await queryRunner.query(`ALTER TABLE "places" ADD "tercaUntil" character varying`);
        await queryRunner.query(`ALTER TABLE "places" ADD "quartaOpen" boolean`);
        await queryRunner.query(`ALTER TABLE "places" ADD "quartaFrom" character varying`);
        await queryRunner.query(`ALTER TABLE "places" ADD "quartaUntil" character varying`);
        await queryRunner.query(`ALTER TABLE "places" ADD "quintaOpen" boolean`);
        await queryRunner.query(`ALTER TABLE "places" ADD "quintaFrom" character varying`);
        await queryRunner.query(`ALTER TABLE "places" ADD "quintaUntil" character varying`);
        await queryRunner.query(`ALTER TABLE "places" ADD "sextaOpen" boolean`);
        await queryRunner.query(`ALTER TABLE "places" ADD "sextaFrom" character varying`);
        await queryRunner.query(`ALTER TABLE "places" ADD "sextaUntil" character varying`);
        await queryRunner.query(`ALTER TABLE "places" ADD "sabadoOpen" boolean`);
        await queryRunner.query(`ALTER TABLE "places" ADD "sabadoFrom" character varying`);
        await queryRunner.query(`ALTER TABLE "places" ADD "sabadoUntil" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "sabadoUntil"`);
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "sabadoFrom"`);
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "sabadoOpen"`);
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "sextaUntil"`);
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "sextaFrom"`);
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "sextaOpen"`);
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "quintaUntil"`);
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "quintaFrom"`);
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "quintaOpen"`);
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "quartaUntil"`);
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "quartaFrom"`);
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "quartaOpen"`);
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "tercaUntil"`);
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "tercaFrom"`);
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "tercaOpen"`);
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "segundaUntil"`);
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "segundaFrom"`);
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "segundaOpen"`);
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "domingoUntil"`);
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "domingoFrom"`);
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "domingoOpen"`);
        await queryRunner.query(`ALTER TABLE "places" ADD "sabado" boolean`);
        await queryRunner.query(`ALTER TABLE "places" ADD "sexta" boolean`);
        await queryRunner.query(`ALTER TABLE "places" ADD "quinta" boolean`);
        await queryRunner.query(`ALTER TABLE "places" ADD "quarta" boolean`);
        await queryRunner.query(`ALTER TABLE "places" ADD "terca" boolean`);
        await queryRunner.query(`ALTER TABLE "places" ADD "segunda" boolean`);
        await queryRunner.query(`ALTER TABLE "places" ADD "domingo" boolean`);
    }

}
