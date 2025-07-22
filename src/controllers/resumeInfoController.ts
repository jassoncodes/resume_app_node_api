import { NextFunction, Request, Response } from "express";

import { DatabaseError } from "../errors/DatabaseErrorHandler";
import ResumeInfoService from "../services/resumeInfoService";
import { ContactType } from "../types/resumeInfoTypes";
import logger from "../utils/logger";

const resumeService = new ResumeInfoService();

class ResumeInfoController {
  static async getContactInfo(req: Request, res: Response, next: NextFunction) {
    try {
      const contactInfo: ContactType[] = await resumeService.getContactInfo();
      res.json(contactInfo);
    } catch (error) {
      if (error instanceof DatabaseError) {
        logger.error(error);
      }
      return next(error);
    }
  }
}

export default ResumeInfoController;
