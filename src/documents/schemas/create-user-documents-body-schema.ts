import { z } from 'zod';

const MAX_UPLOAD_SIZE = 10 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = ['application/pdf'];

const validateFile = z
  .any()
  .refine((file) => file !== null, { error: 'Arquivo é obrigatório' })
  .refine((file) => file?.size <= MAX_UPLOAD_SIZE, {
    error: 'Arquivo deve conter até 10mb',
  })
  .refine((file) => ACCEPTED_FILE_TYPES.includes(file?.mimetype), {
    error: 'Arquivo deve ser do tipo PDF',
  });

export { validateFile };
