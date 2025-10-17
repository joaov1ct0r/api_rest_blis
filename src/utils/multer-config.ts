import multer from 'multer';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { mkdirSync, existsSync } from 'node:fs';

const uploadPath = path.resolve(__dirname, '..', '..', 'uploads');

if (!existsSync(uploadPath)) {
  mkdirSync(uploadPath);
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadPath);
  },
  filename: (_req, file, cb) => {
    cb(null, Date.now() + '-' + randomUUID() + '.pdf');
  },
});

export const upload = multer({ storage });
