import { CustomError } from "./CustomError";

export class DatabaseError extends CustomError {
  public readonly originalError: unknown;

  constructor(message: string, originalError?: unknown) {
    super(message, 500);
    this.name = "DatabaseError";
    this.originalError = originalError;

    if (originalError instanceof Error && originalError.stack) {
      this.stack = `${this.stack}\n\nCaused by:\n${originalError.stack}`;
    }
  }
}
