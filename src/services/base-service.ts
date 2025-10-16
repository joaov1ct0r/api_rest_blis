import { BadRequestError } from '@errors/bad-request-error';
import { UnauthorizedError } from '@errors/unauthorized-error';
import { ForbiddenError } from '@errors/forbidden-error';

export class BaseService {
  protected badRequest(message: string): void {
    new BadRequestError(message);
  }

  protected unauthorized(message: string): void {
    new UnauthorizedError(message);
  }

  protected forbidden(message: string): void {
    new ForbiddenError(message);
  }
}
