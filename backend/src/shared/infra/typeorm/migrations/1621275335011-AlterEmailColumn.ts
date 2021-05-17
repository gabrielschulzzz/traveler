import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterEmailColumn1621275335011 implements MigrationInterface {
    name = 'AlterEmailColumn1621275335011'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "emai" TO "email"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "email" TO "emai"`);
    }

}
