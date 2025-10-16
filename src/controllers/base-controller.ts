import { BadRequestError } from '@src/errors/bad-request-error';

export abstract class BaseController {
  protected badRequest(message: string): void {
    new BadRequestError(message);
  }
}
