import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationReviewandPlace1621271771632 implements MigrationInterface {
    name = 'RelationReviewandPlace1621271771632'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" RENAME COLUMN "place" TO "placeId"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "placeId"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "placeId" uuid`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_67cd63ae9e37b6fa43941214a19" FOREIGN KEY ("placeId") REFERENCES "places"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_67cd63ae9e37b6fa43941214a19"`);
        await queryRunner.query(`ALTER TABLE "reviews" DROP COLUMN "placeId"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD "placeId" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "reviews" RENAME COLUMN "placeId" TO "place"`);
    }

}
