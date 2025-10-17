import { z } from 'zod';

const createAbilityBodySchema = z.object({
  name: z.string({ error: 'Nome é obrigatório!' }),
});

export { createAbilityBodySchema };
