import { BadRequestError } from '@errors/bad-request-error';
import { UnauthorizedError } from '@errors/unauthorized-error';
import { ForbiddenError } from '@errors/forbidden-error';

export class BaseService {
  protected badRequest(message: string): BadRequestError {
    return new BadRequestError(message);
  }

  protected unauthorized(message: string): UnauthorizedError {
    return new UnauthorizedError(message);
  }

  protected forbidden(message: string): ForbiddenError {
    return new ForbiddenError(message);
  }
}
