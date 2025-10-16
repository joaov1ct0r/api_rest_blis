import { BadRequestError } from '@src/errors/bad-request-error';
import { ForbiddenError } from '@src/errors/forbidden-error';
import { UnauthorizedError } from '@src/errors/unauthorized-error';

export abstract class BaseController {
  protected badRequest(message: string): BadRequestError {
    return new BadRequestError(message);
  }

  protected forbidden(message: string): ForbiddenError {
    return new ForbiddenError(message);
  }

  protected unauthorized(message: string): UnauthorizedError {
    return new UnauthorizedError(message);
  }
}
