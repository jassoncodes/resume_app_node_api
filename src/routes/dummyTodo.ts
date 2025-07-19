import express from "express";
import DummyTodoController from "../controllers/dummyTodoController";

const router = express.Router();

router.get("/", DummyTodoController.getAllDummyTodos);

export default router;
