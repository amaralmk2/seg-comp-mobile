import { z } from "zod";

export const validationSchema = z.object({
    firstName: z.string().min(1, "O primeiro nome é obrigatório"),
    lastName: z.string().min(1, "O sobrenome é obrigatório"),
    gender: z.enum(["Masculino", "Feminino", "Outro"]),
    birthDate: z.string().regex(/^\d{2}\/\d{2}\/\d{4}$/, "Data de nascimento inválida"),
    cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF inválido"),
    email: z.string().email("E-mail inválido"),
    password: z
      .string()
      .min(8, "A senha deve ter no mínimo 8 caracteres")
      .regex(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
      .regex(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
      .regex(/[\W_]/, "A senha deve conter pelo menos um caractere especial"),
    confirmPassword: z.string().min(1, "Confirmação de senha é obrigatória"),
    street: z.string().min(5, "Rua deve ter no mínimo 5 caracteres").max(100, "Rua deve ter no máximo 100 caracteres"),
    number: z.string().min(1, "Número da residência é obrigatório"),
    zipcode: z.string().regex(/^\d{5}-\d{3}$/, "CEP inválido"),
    city: z.string().min(1, "Cidade é obrigatória"),
    privacyPolicyAccepted: z.boolean().refine((val) => val === true, {
      message: "É necessário aceitar a política de privacidade",
    }),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });
  