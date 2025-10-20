import { z } from 'zod';

const getUsersAbilitiesBodySchema = z.object({
  amount: z.coerce
    .number({
      error: 'Quantidade de itens desejados é obrigatório!',
    })
    .default(20),
  page: z.coerce
    .number({
      error: 'Número da página atual é obrigatório!',
    })
    .default(1),
});

export { getUsersAbilitiesBodySchema };
