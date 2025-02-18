import pool from "../config/db.js";

const DataModel = {
  async getAllData() {
    const result = await pool.query("SELECT * FROM test");
    return result.rows;
  },
};

export default DataModel;
