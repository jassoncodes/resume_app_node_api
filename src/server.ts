import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dataRoutes from "./routes/dataRoutes";
import checkDatabaseConnection from "./config/checkDatabaseConnection";

import morganMiddleware from "./utils/morganHttpReqLogger";
import logger from "./utils/logger";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(morganMiddleware);

app.use(cors());
app.use(express.json());

app.use("/data", dataRoutes);

app.listen(port, async () => {
  logger.info(
    `🚀 Server running in ${process.env.NODE_ENV} mode on http://localhost:${port}`
  );
  await checkDatabaseConnection();
});
