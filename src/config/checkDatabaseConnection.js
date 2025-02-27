import logger from "../utils/logger.js";
import pool from "./db.js";

// Función para probar la conexión y loguear un registro
const checkDatabaseConnection = async () => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT NOW() as now");
    client.release();
    logger.info("✅ Conexión exitosa a PostgreSQL");
    logger.info(`📅 Registro de la base de datos: ${result.rows[0].now}`);
  } catch (error) {
    logger.error("❌ Error al conectar con PostgreSQL: " + error.message);
  }
};

export default checkDatabaseConnection;
