// src/types/express/index.d.ts
import * as express from 'express';

declare global {
  namespace Express {
    interface Request {
      userId?: string;
      file?: express.Multer.File;
      files?: express.Multer.File[];
    }
  }
}

export {};
