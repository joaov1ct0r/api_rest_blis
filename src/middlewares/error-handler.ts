import type { NextFunction, Request, Response } from 'express';

export class ErrorHandler {
  execute(error: any, _req: Request, res: Response, _next: NextFunction) {
    if (error && error.statusCode && error.message) {
      return res.status(400).json({ message: error.message, status: 400 });
    }

    return res.status(500).json({
      message: 'Internal server error',
      status: 500,
    });
  }
}
