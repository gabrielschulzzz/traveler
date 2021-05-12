import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRelationPlaceCity1620851485908
  implements MigrationInterface {
  name = "CreateRelationPlaceCity1620851485908";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "places" ADD "cityId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "places" ADD CONSTRAINT "FK_f548129f350a5ed88401d583c8b" FOREIGN KEY ("cityId") REFERENCES "cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "places" DROP CONSTRAINT "FK_f548129f350a5ed88401d583c8b"`
    );
    await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "cityId"`);
  }
}
