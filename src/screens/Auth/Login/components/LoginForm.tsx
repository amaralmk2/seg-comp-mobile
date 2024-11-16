import { BottomSend, ContainerForm, Input, SubTitle, TitleForm, TextBottom, TextErros } from "../style";
import { ContainerField } from "../style";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { Text } from "react-native";

const validationSchema = z.object({
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
  
  interface FormData {
    email: string;
    password: string;
  }
export function LoginForm() {
    const onSubmit = (data: FormData) => {
        console.log(data);
      };

      const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>({
        resolver: zodResolver(validationSchema),
      });
    return (
        <ContainerForm>
          <TitleForm>Entre em sua conta</TitleForm>
          <ContainerField>
            <SubTitle>E-mail</SubTitle>
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Digite seu e-mail..."
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  hasError={!!errors.email} 
                />
              )}
            />
          {errors.email?.message && typeof errors.email.message === 'string' && (
             <TextErros>{errors.email.message}</TextErros>
          )}
          </ContainerField>

          <ContainerField>
            <SubTitle>Senha</SubTitle>
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Digite sua senha..."
                  secureTextEntry
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  hasError={!!errors.password} 
                />
              )}
            />
              {errors.password?.message && typeof errors.password.message === 'string' && (
                <TextErros>{errors.password.message}</TextErros>
              )}
          </ContainerField>

          <BottomSend onPress={handleSubmit(onSubmit)}>
            <TextBottom>Entrar</TextBottom>
          </BottomSend>
        </ContainerForm>
    )
}