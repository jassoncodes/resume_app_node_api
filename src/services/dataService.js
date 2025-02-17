import DataModel from "../models/dataModel.js";

const DataService = {
  async fetchData() {
    return await DataModel.getAllData();
  },
};

export default DataService;
