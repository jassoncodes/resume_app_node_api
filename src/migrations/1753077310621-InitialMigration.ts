import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1753077310621 implements MigrationInterface {
    name = 'InitialMigration1753077310621'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contact" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "github" character varying NOT NULL, "linkedin" character varying NOT NULL, CONSTRAINT "PK_2cbbe00f59ab6b3bb5b8d19f989" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "test" DROP COLUMN "data"`);
        await queryRunner.query(`ALTER TABLE "test" ADD "data" jsonb NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "test" DROP COLUMN "data"`);
        await queryRunner.query(`ALTER TABLE "test" ADD "data" json`);
        await queryRunner.query(`DROP TABLE "contact"`);
    }

}
