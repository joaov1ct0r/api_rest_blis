export class ForbiddenError {
  constructor(message: string) {
    throw new Error(message);
  }
}
