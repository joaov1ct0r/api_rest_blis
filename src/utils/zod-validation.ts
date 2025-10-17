import { ZodAny, ZodObject } from 'zod';
import { NextFunction, Request, Response } from 'express';
import { BaseController } from '@controllers/base-controller';
import { authUserBodySchema } from '@auth/schemas/auth-user-body-schema';
import { createUserBodySchema } from '@users/schemas/create-user-body-schema';
import { validateFile } from '@documents/schemas/create-user-documents-body-schema';
import { createAbilityBodySchema } from '@abilities/schemas/create-ability-body-schema';

export class ZodValidation extends BaseController {
  static createUser(req: Request, res: Response, next: NextFunction) {
    ZodValidation.execute(req, res, next, createUserBodySchema);
  }

  static createUserDocuments(req: Request, res: Response, next: NextFunction) {
    ZodValidation.executeFile(req, res, next, validateFile);
  }

  static authUser(req: Request, res: Response, next: NextFunction) {
    ZodValidation.execute(req, res, next, authUserBodySchema);
  }

  static createAbility(req: Request, res: Response, next: NextFunction) {
    ZodValidation.execute(req, res, next, createAbilityBodySchema);
  }

  static executeFile(
    req: Request,
    res: Response,
    next: NextFunction,
    schema: ZodAny,
  ) {
    const result = schema.safeParse(req.file);

    if (result.success === false) {
      return res.status(400).json({
        error: result.error.format(),
        status: 400,
      });
    }

    next();
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
