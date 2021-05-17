import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterPlacesEntityAddTelefone1621211564467 implements MigrationInterface {
    name = 'AlterPlacesEntityAddTelefone1621211564467'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "places" ADD "telefone" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "places" DROP COLUMN "telefone"`);
    }

}
