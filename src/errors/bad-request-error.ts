export class BadRequestError {
  constructor(message: string) {
    throw new Error(message);
  }
}
