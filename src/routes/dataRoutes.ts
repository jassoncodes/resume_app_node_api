import express from "express";
import DataController from "../controllers/dataController";

const router = express.Router();

router.get("/", DataController.getAll);

export default router;
