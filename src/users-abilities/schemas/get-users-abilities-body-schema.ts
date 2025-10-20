import { z } from 'zod';

const getUsersAbilitiesBodySchema = z.object({
  pageSize: z.coerce.number().default(20),
  pageNumber: z.coerce.number().default(1),
  skipAmount: z.coerce.number().default(0),
});

export { getUsersAbilitiesBodySchema };
