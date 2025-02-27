import { Data } from "@/@types/data";
import { AppDataSource } from "@/config/db";
import IRepository from "@/interfaces/IRepositoy";
import { DataModel } from "@/models/dataModel";

class DataRespository implements IRepository<Data> {
  private repository = AppDataSource.getRepository(DataModel);

  async getAll(): Promise<Data[]> {
    return await this.repository.find();
  }

  async getById(id: number): Promise<Data | null> {
    return (await this.repository.findOne({ where: { id } })) || null;
  }

  async create(entity: Data): Promise<Data> {
    return await this.repository.save(entity);
  }

  async update(id: number, entity: Partial<Data>): Promise<DataModel | null> {
    await this.repository.update(id, entity);
    return await this.getById(id);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.repository.delete(id);
    return result.affected !== 0;
  }
}

export default DataRespository;

/// before TypeORM
// class DataRespository implements IRepository<Data>{

// async getAll(): Promise<Data[]> {
//     const result = await pool.query("SELECT * FROM test");
//     return result.rows;
// }

//     getById(id: number): Promise<Data | null> {
//         throw new Error("Method not implemented.");
//     }

//     create(entity: Data): Promise<Data> {
//         throw new Error("Method not implemented.");
//     }

//     update(id: number, entity: Partial<Data>): Promise<Data | null> {
//         throw new Error("Method not implemented.");
//     }

//     delete(id: number): Promise<boolean> {
//         throw new Error("Method not implemented.");
//     }

// }
