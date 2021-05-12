import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateCityPlaces1620850807920 implements MigrationInterface {
  name = "CreateCityPlaces1620850807920";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "cities" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "fact" character varying NOT NULL, CONSTRAINT "PK_4762ffb6e5d198cfec5606bc11e" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "places" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "photo" character varying NOT NULL, "category" character varying NOT NULL, "domingo" boolean, "segunda" boolean, "terca" boolean, "quarta" boolean, "quinta" boolean, "sexta" boolean, "sabado" boolean, "cep" character varying NOT NULL, "rua" character varying NOT NULL, "bairro" character varying NOT NULL, "numero" character varying NOT NULL, CONSTRAINT "PK_1afab86e226b4c3bc9a74465c12" PRIMARY KEY ("id"))`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "places"`);
    await queryRunner.query(`DROP TABLE "cities"`);
  }
}
