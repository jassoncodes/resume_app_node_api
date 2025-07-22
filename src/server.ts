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

const allowedOrigins = [
  "http://localhost:5173",
  "https://jasson.codes",
  "https://www.jasson.codes",
];

const env = process.env.NODE_ENV || "development";
dotenv.config({
  path: path.resolve(__dirname, `../.env.${env}`),
});

const app = express();
const host = process.env.APP_HOST;
const port = process.env.PORT || process.env.APP_PORT || 5000;

app.use(morganMiddleware);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: false,
  })
);
app.use(express.json());

app.use("/api/data", dataRoutes);
app.use("/api/dummytodo", dummyRoute);
app.use("/api", resumeApiRouter);

app.get("/", (req, res) => {
  res.send("🪄 API running");
});

app.use(ErrorHandler);

app.listen(port, async () => {
  logger.info(
    `🚀 Server running in ${process.env.NODE_ENV} mode on ${host}:${port}`
  );
  await checkDatabaseConnection();
});
