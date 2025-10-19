import { z } from 'zod';

const deleteUsersAbilitiesBodySchema = z.object({
  ids: z
    .array(z.string({ error: 'ID da habilidade é obrigatório!' }), {
      error: 'IDs das habilidades é obrigatório!',
    })
    .min(1, { error: 'Ao menos 1 ID de habilidade deve ser fornecido!' }),
});

export { deleteUsersAbilitiesBodySchema };
