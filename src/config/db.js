import pg from "pg";
import dotenv from "dotenv";

// Detect environment (default to 'development' if not set)
const env = process.env.NODE_ENV || "development";
dotenv.config({ path: `.env.${env}` });

// const pool = new pg.Pool({
//   connectionString: process.env.DATABASE_URL,
//   ssl: env === "production" ? { rejectUnauthorized: false } : false, // Required for cloud DBs
// });

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

export default pool;
