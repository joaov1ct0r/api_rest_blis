import { z } from 'zod';

const createUserBodySchema = z.object({
  name: z.string({ error: 'Nome é obrigatório!' }),
  birthdate: z.string({ error: 'Data de nascimento é obrigatória!' }),
  email: z.email({ error: 'Email é obrigatório!' }),
  password: z.string({ error: 'Senha é obrigatória!' }),
});

type ICreateUserBodySchema = z.infer<typeof createUserBodySchema>;

export { createUserBodySchema, ICreateUserBodySchema };
