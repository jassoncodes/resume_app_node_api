import express from "express";
import ResumeInfoController from "../controllers/resumeInfoController";

const router = express.Router();

router.get("/contact", ResumeInfoController.getContactInfo);

export default router;
