import { z } from 'zod';

const authUserBodySchema = z.object({
  email: z.email({ error: 'Email é obrigatório!' }),
  password: z.string({ error: 'Senha é obrigatória!' }),
});

export { authUserBodySchema };
