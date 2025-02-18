import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dataRoutes from "./routes/dataRoutes.js";
import checkDatabaseConnection from "./config/checkDatabaseConnection.js";

import morganMiddleware from "./utils/morganHttpReqLogger.js";
import logger from "./utils/logger.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(morganMiddleware);

app.use(cors());
app.use(express.json());

app.use("/api/data", dataRoutes);

app.listen(port, async () => {
  logger.info(
    `🚀 Server running in ${process.env.NODE_ENV} mode on port ${port}`
  );
  await checkDatabaseConnection();
});
