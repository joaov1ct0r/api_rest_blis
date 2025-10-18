import { z } from 'zod';

const createUsersAbilitiesBodySchema = z.object({
  ability_id: z.string({ error: 'ID da habilidade é obrigatório!' }),
  user_id: z.string({ error: 'ID do usuário é obrigatório!' }),
  years_experience: z.coerce
    .number()
    .min(0, { error: 'Anos de experiência deve ser maior ou igual a 0' }),
});

export { createUsersAbilitiesBodySchema };
