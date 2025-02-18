import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dataRoutes from "./routes/dataRoutes.js";

const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : ".env.development";

dotenv.config({ path: envFile });

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api/data", dataRoutes);

app.listen(port, () => {
  console.log(
    `🚀 Server running in ${process.env.NODE_ENV} mode on port ${port}`
  );
});
