import { z } from 'zod';

const deleteUsersAbilitiesBodySchema = z.object({
  ids: z.array(z.string({ error: 'ID da habilidade é obrigatório!' }), {
    error: 'IDs das habilidades é obrigatório!',
  }),
});

export { deleteUsersAbilitiesBodySchema };
