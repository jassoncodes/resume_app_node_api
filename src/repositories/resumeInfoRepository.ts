import { AppDataSource } from "../config/db";
import { DatabaseError } from "../errors/DatabaseErrorHandler";
import IRepository from "../interfaces/IRepositoy";
import { ContactInfoModel } from "../models/ResumeInfoModels";
import { ContactType } from "../types/resumeInfoTypes";

class ResumeInfoRepository implements IRepository<ContactType> {
  private repository = AppDataSource.getRepository(ContactInfoModel);

  async getAll(): Promise<ContactType[]> {
    try {
      return await this.repository.find();
    } catch (error) {
      throw new DatabaseError("Error querying all registries: " + error);
    }
  }

  getById(id: number): Promise<ContactType | null> {
    throw new Error("Method not implemented.");
  }
  create(entity: ContactType): Promise<ContactType> {
    throw new Error("Method not implemented.");
  }
  update(
    id: number,
    entity: Partial<ContactType>
  ): Promise<ContactType | null> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<boolean> {
    throw new Error("Method not implemented.");
  }
}

export default ResumeInfoRepository;
