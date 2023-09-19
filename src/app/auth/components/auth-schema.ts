import { z } from 'zod';

export const authSchema = z.object({
  email: z
    .string({ required_error: 'Preenchimento obrigatório' })
    .email('E-mail inválido'),
  password: z
    .string({ required_error: 'Preenchimento obrigatório' })
    .min(3, 'A senha deve contar pelo menos 3 caracteres'),
  confirm_password: z.string().min(3, 'As senhas devem ser iguais').optional(),
});
