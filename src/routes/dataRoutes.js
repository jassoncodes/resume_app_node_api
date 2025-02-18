import express from "express";
import DataController from "../controllers/dataController.js";

const router = express.Router();

router.get("/", DataController.getData);

export default router;
