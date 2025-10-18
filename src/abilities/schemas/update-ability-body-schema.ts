import { z } from 'zod';

const updateAbilityBodySchema = z.object({
  active: z.boolean({ error: 'Active é obrigatório!' }),
  id: z.string({ error: 'ID da habilidade é obrigatório!' }),
});

export { updateAbilityBodySchema };
