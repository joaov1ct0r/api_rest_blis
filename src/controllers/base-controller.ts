import { BadRequestError } from '@src/errors/bad-request-error';

export abstract class BaseController {
  protected badRequest(message: string): BadRequestError {
    return new BadRequestError(message);
  }
}
