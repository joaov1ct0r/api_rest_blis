import { z } from 'zod';

const updateAbilityBodySchema = z.object({
  name: z.string({ error: 'Nome é obrigatório!' }),
});

export { updateAbilityBodySchema };
