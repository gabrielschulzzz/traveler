import {MigrationInterface, QueryRunner} from "typeorm";

export class AddReviewColumnToReviewEntity1621286098404 implements MigrationInterface {
    name = 'AddReviewColumnToReviewEntity1621286098404'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" ADD "review" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "review"`);
    }

}
