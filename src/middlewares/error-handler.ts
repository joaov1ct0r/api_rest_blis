import type { Request, Response } from 'express';

export class ErrorHandler {
  static execute(_req: Request, res: Response) {
    res.status(404).send();
  }
}
