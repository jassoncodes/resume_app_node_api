import { DummyTodoType } from "../types/dummyTodo";
import { Request, Response } from "express";

const dummyData = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
];

class DummyTodoController {
  static async getAllDummyTodos(req: Request, res: Response) {
    const data: DummyTodoType[] = await dummyData.map((dummyData) => dummyData);
    res.json(data);
  }
}

export default DummyTodoController;
