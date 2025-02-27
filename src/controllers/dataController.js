import DataService from "../services/dataService.js";

const DataController = {
  async getData(req, res) {
    try {
      const data = await DataService.fetchData();
      res.json(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  },
};

export default DataController;
