export class UnauthorizedError extends Error {
  public message: string;
  public statusCode: number;

  constructor(message: string, statusCode = 401) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }
}
