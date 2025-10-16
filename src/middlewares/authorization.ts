import { BaseController } from '@src/controllers/base-controller';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { env } from '@utils/env-config';

export class Authorization extends BaseController {
  execute(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw this.unauthorized('Não autorizado!');
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, env.JWT_SECRET, (error, payload) => {
      if (error) {
        throw this.forbidden('Acesso negado!');
      }

      req.payload = payload as { userId: string };
      next();
    });
  }
}
