import { z } from "zod";

export const validationSchema = z.object({
    email: z
      .string({
        required_error: "O e-mail é obrigatório", 
      })
      .email("Digite um e-mail válido"),
    password: z
      .string({
        required_error: "A senha é obrigatória",
      })
      .min(8, "A senha deve ter pelo menos 8 caracteres")
      .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
      .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
      .regex(/[\W_]/, "A senha deve conter pelo menos um caractere especial"),
  });
  