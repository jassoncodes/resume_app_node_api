import fs from "fs";
import path from "path";
import { MigrationInterface, QueryRunner } from "typeorm";

export class SeedContactInfo1753555110009 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const seedFilePath = path.join(__dirname, "../seeds/contact.seed.json");
    const seedData = JSON.parse(fs.readFileSync(seedFilePath, "utf-8"));

    for (const contact of seedData) {
      await queryRunner.query(
        "INSERT INTO contact (email, phone, github, linkedin) VALUES ($1, $2, $3, $4)",
        [contact.email, contact.phone, contact.github, contact.linkedin]
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query("DELETEE from contact");
  }
}
