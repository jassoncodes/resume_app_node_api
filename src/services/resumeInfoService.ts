import { NotFoundError } from "@/errors/NotFound";
import ResumeInfoRepository from "@/repositories/resumeInfoRepository";
import { ContactType } from "@/types/resumeInfoTypes";

class ResumeInfoService {
  private repository = new ResumeInfoRepository();

  async getContactInfo(): Promise<ContactType[]> {
    const contactInfo = await this.repository.getAll();
    if (contactInfo.length === 0)
      throw new NotFoundError("No information found");

    return contactInfo;
  }
}

export default ResumeInfoService;
