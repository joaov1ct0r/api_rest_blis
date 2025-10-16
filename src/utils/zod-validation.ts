import { ZodObject } from 'zod';
import { NextFunction, Request, Response } from 'express';
import { BaseController } from '@controllers/base-controller';
import { authUserBodySchema } from '@auth/schemas/auth-user-body-schema';
import { createUserBodySchema } from '@users/schemas/create-user-body-schema';

export class ZodValidation extends BaseController {
  static createUser(req: Request, res: Response, next: NextFunction) {
    ZodValidation.execute(req, res, next, createUserBodySchema);
  }

  static authUser(req: Request, res: Response, next: NextFunction) {
    ZodValidation.execute(req, res, next, authUserBodySchema);
  }

  static execute(
    req: Request,
    res: Response,
    next: NextFunction,
    schema: ZodObject,
  ) {
    const result = schema.safeParse(req.body);

    if (result.success === false) {
      return res
        .status(400)
        .json({ error: result.error.format(), status: 400 });
    }

    req.body = result.data;
    next();
  }
}
