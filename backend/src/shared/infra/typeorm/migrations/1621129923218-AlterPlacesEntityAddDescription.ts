import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterPlacesEntityAddDescription1621129923218 implements MigrationInterface {
    name = 'AlterPlacesEntityAddDescription1621129923218'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "places" ADD "description" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "description"`);
    }

}
