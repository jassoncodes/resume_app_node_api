import { Data } from "../types/data";
import DataRespository from "../repositories/dataRespository";

class DataService {
  private repository = new DataRespository();

  async getAll(): Promise<Data[]> {
    return this.repository.getAll();
  }

  async getDataById(id: number): Promise<Data | null> {
    return this.repository.getById(id);
  }

  async createData(data: object): Promise<Data> {
    return this.repository.create({ id: 0, data }); // El id se genera automáticamente
  }

  async updateData(id: number, data: object): Promise<Data | null> {
    return this.repository.update(id, { data });
  }

  async deleteData(id: number): Promise<boolean> {
    return this.repository.delete(id);
  }
}

export default DataService;

// [old service version] using models/dataModel
// import { Data } from "@/@types/data";
// import DataModel from "../models/dataModel";

// const DataService = {
//   async getAll(): Promise<Data[]> {
//     return await DataModel.getAll();
//   },
// };

// export default DataService;
