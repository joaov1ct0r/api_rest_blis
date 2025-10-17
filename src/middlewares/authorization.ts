import jwt from 'jsonwebtoken';
import { env } from '@utils/env-config';
import { NextFunction, Request, Response } from 'express';
import { UnauthorizedError } from '@src/errors/unauthorized-error';
import { ForbiddenError } from '@src/errors/forbidden-error';

class Authorization {
  public async execute(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedError('Não autorizado!');
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, env.JWT_SECRET, (error, payload) => {
      if (error) {
        throw new ForbiddenError('Acesso negado!');
      }

      const { userId } = payload as { userId: string };
      req.userId = userId;
      next();
    });
  }
}

const authorization = new Authorization();

export { authorization, Authorization };
