import { CustomError } from "../types/customErrorType";
import { Request, Response, NextFunction } from "express";

export function ErrorHandler(
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    statusCode: statusCode,
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
}
