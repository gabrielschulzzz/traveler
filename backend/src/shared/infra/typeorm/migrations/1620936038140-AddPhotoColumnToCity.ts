import {MigrationInterface, QueryRunner} from "typeorm";

export class AddPhotoColumnToCity1620936038140 implements MigrationInterface {
    name = 'AddPhotoColumnToCity1620936038140'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cities" ADD "photo" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cities" DROP COLUMN "photo"`);
    }

}
