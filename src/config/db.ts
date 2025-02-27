import pg from "pg";
import dotenv from "dotenv";

import "reflect-metadata";
import { DataSource } from "typeorm";
import { DataModel } from "@/models/dataModel";
import logger from "@/utils/logger";

// Detect environment (default to 'development' if not set)
const env = process.env.NODE_ENV || "development";
dotenv.config({ path: `.env.${env}` });

export const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "valesaug_jassoncodes",
  synchronize: false,
  logging: true,
  entities: [DataModel],
});

AppDataSource.initialize()
  .then(() => logger.info("📦 TypeORM: Base de datos conectada"))
  .catch((error) => logger.error("❌ TypeORM: Error conectando la BD:", error));
