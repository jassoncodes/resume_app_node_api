import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import checkDatabaseConnection from "./config/checkDatabaseConnection";

import dataRoutes from "./routes/dataRoutes";
import dummyRoute from "./routes/dummyTodo";
import resumeApiRouter from "./routes/resumeApiRoutes";

import morganMiddleware from "./utils/morganHttpReqLogger";
import logger from "./utils/logger";
import path from "path";
import { ErrorHandler } from "./errors/ErrorHandler";
import { NotFoundError } from "./errors/NotFound";
import { corsOptions } from "./config/config";

const env = process.env.NODE_ENV || "development";
dotenv.config({
  path: path.resolve(__dirname, `../.env.${env.toLocaleLowerCase()}`),
});

const app = express();
const host = process.env.HOST || "localhost";
const port = process.env.PORT || 5000;

app.use(morganMiddleware);

app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("✅ API running");
});

app.use("/api", resumeApiRouter);
app.use("/api/data", dataRoutes);
app.use("/api/dummytodo", dummyRoute);

app.use((req, res, next) => {
  next(new NotFoundError(`❌ Endpoint not found: ${req.originalUrl}`));
});

app.use(ErrorHandler);

app.listen(port, async () => {
  logger.info(
    `🚀 Server running in ${process.env.NODE_ENV} mode on ${host}:${port}`
  );
  await checkDatabaseConnection();
});
