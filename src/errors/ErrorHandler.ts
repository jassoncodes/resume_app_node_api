import logger from "@/utils/logger";
import { CustomError } from "../types/CustomErrorType";
import { Request, Response, NextFunction } from "express";

export function ErrorHandler(
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = err.statusCode || 500;

  if (process.env.NODE_ENV?.toLocaleLowerCase() === "production") {
    logger.error(
      `[${req.method}] ${req.originalUrl} - ${err.message}\n${err.stack}`
    );
  } else {
    // En desarrollo, aún puedes loguear o imprimir
    console.error(err);
  }

  res.status(statusCode).json({
    statusCode: statusCode,
    message: err.message || "Internal Server Error",
    stack:
      process.env.NODE_ENV?.toLowerCase() === "development"
        ? err.stack
        : undefined,
  });
}
