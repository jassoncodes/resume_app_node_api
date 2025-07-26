import pg from "pg";
import dotenv from "dotenv";

import "reflect-metadata";
import { DataSource } from "typeorm";
import logger from "../utils/logger";

// Detect environment (default to 'development' if not set)
const env = process.env.NODE_ENV || "development";
dotenv.config({ path: `.env.${env}` });

export const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: Number(process.env.PGDB_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: process.env.POSTGRES_DB,
  synchronize: false,
  logging: true,
  entities: [__dirname + "/../models/*.ts"],
  migrations: [__dirname + "/../migrations/*.ts"],
});

AppDataSource.initialize()
  .then(async () => {
    logger.info("📦 TypeORM: Base de datos conectada");

    if (process.env.NODE_ENV === "PRODUCTION") {
      await AppDataSource.runMigrations();
      logger.info("🪄 Migration completed");
    }
  })
  .catch((error) =>
    logger.error("❌ TypeORM: Error while initializing database:", error)
  );
