import { z } from 'zod';

const updateAbilityBodySchema = z.object({
  active: z.string({ error: 'Active é obrigatório!' }),
});

export { updateAbilityBodySchema };
