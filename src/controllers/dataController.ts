import { Data } from "../types/data";
import DataService from "../services/dataService";
import { Request, Response } from "express";

const service = new DataService();

class DataController {
  static async getAll(req: Request, res: Response) {
    const data: Data[] = await service.getAll();
    res.json(data);
  }
}

export default DataController;

///old version using [old service version]
// import { Request, Response } from "express";
// import DataService from "../services/dataService";

// const DataController = {

//   async getAll(req: Request, res: Response) {
//     try {
//       const data = await DataService.getAll();
//       res.json(data);
//     } catch (error) {
//       console.error("Error fetching data: ", error);
//       res.status(500).json({ message: "Internal Server Error" });
//     }
//   },

// };

// export default DataController;
