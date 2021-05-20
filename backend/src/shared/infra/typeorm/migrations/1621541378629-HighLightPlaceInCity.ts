import {MigrationInterface, QueryRunner} from "typeorm";

export class HighLightPlaceInCity1621541378629 implements MigrationInterface {
    name = 'HighLightPlaceInCity1621541378629'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cities" ADD "highlightId" uuid`);
        await queryRunner.query(`ALTER TABLE "cities" ADD CONSTRAINT "UQ_7854314f86f16bce34ae03b7b1c" UNIQUE ("highlightId")`);
        await queryRunner.query(`ALTER TABLE "cities" ADD CONSTRAINT "FK_7854314f86f16bce34ae03b7b1c" FOREIGN KEY ("highlightId") REFERENCES "places"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cities" DROP CONSTRAINT "FK_7854314f86f16bce34ae03b7b1c"`);
        await queryRunner.query(`ALTER TABLE "cities" DROP CONSTRAINT "UQ_7854314f86f16bce34ae03b7b1c"`);
        await queryRunner.query(`ALTER TABLE "cities" DROP COLUMN "highlightId"`);
    }

}
