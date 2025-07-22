import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "test" })
export class DataModel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "jsonb" })
  data!: object;
}

/// [old data model] before TypeORM
// import { Data } from "@/@types/data.js";
// import pool from "../config/db.js";

// const DataModel = {
//   async getAll(): Promise<Data[]> {
//     const result = await pool.query("SELECT * FROM test");
//     return result.rows;
//   },
// };

// export default DataModel;
