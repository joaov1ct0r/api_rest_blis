export class UnauthorizedError {
  constructor(message: string) {
    throw new Error(message);
  }
}
