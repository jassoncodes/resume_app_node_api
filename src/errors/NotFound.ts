import { CustomError } from "./CustomError";

export class NotFoundError extends CustomError {
  public readonly originalError: unknown;

  constructor(message: string, originalError?: unknown) {
    super(message, 404);
    this.name = "Not Found Error";
    this.originalError = originalError;

    if (originalError instanceof Error && originalError.stack) {
      this.stack = `${this.stack}\n\nCaused by:\n${originalError.stack}`;
    }
  }
}
