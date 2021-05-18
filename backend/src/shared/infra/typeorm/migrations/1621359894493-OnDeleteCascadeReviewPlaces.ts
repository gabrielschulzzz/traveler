import {MigrationInterface, QueryRunner} from "typeorm";

export class OnDeleteCascadeReviewPlaces1621359894493 implements MigrationInterface {
    name = 'OnDeleteCascadeReviewPlaces1621359894493'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_67cd63ae9e37b6fa43941214a19"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_67cd63ae9e37b6fa43941214a19" FOREIGN KEY ("placeId") REFERENCES "places"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "reviews" DROP CONSTRAINT "FK_67cd63ae9e37b6fa43941214a19"`);
        await queryRunner.query(`ALTER TABLE "reviews" ADD CONSTRAINT "FK_67cd63ae9e37b6fa43941214a19" FOREIGN KEY ("placeId") REFERENCES "places"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
