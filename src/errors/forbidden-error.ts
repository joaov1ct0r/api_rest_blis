export class ForbiddenError extends Error {
  public message: string;
  public statusCode: number;
  constructor(message: string, statusCode = 403) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }
}
