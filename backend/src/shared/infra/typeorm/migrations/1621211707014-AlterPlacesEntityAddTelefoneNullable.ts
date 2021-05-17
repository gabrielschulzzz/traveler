import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterPlacesEntityAddTelefoneNullable1621211707014 implements MigrationInterface {
    name = 'AlterPlacesEntityAddTelefoneNullable1621211707014'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "places" ALTER COLUMN "telefone" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "places" ALTER COLUMN "telefone" SET NOT NULL`);
    }

}
