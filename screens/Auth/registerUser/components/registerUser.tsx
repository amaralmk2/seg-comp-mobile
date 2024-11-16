import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ScrollView, Text } from "react-native";
import styled from "styled-components/native";
import { z } from "zod";
import { Picker } from "@react-native-picker/picker";
import { TextInputMask } from "react-native-masked-text";
import { ErrorText, FormContainer, PickerContainer, StyledInput, StyledMaskedInput, SubmitButton, SubmitButtonText, Title } from "../style";

const validationSchema = z.object({
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
  streetNumber: z.string().min(1, "Número da rua é obrigatório"),
  zipCode: z.string().regex(/^\d{5}-\d{3}$/, "CEP inválido"),
  city: z.string().min(1, "Cidade é obrigatória"),
  privacyPolicy: z.boolean().refine((val) => val === true, {
    message: "É necessário aceitar a política de privacidade",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "As senhas não coincidem",
  path: ["confirmPassword"],
});

export default function UserRegistration() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <ScrollView>
      <FormContainer>
        <Title>Criação de Conta</Title>

        <Controller
          control={control}
          name="firstName"
          render={({ field: { onChange, value } }) => (
            <>
              <StyledInput
                placeholder="Primeiro Nome"
                onChangeText={onChange}
                value={value}
                hasError={!!errors.firstName}
              />
              {errors.firstName && <ErrorText>{errors.firstName.message}</ErrorText>}
            </>
          )}
        />

        <Controller
          control={control}
          name="lastName"
          render={({ field: { onChange, value } }) => (
            <>
              <StyledInput
                placeholder="Sobrenome"
                onChangeText={onChange}
                value={value}
                hasError={!!errors.lastName}
              />
              {errors.lastName && <ErrorText>{errors.lastName.message}</ErrorText>}
            </>
          )}
        />

        <Controller
          control={control}
          name="gender"
          render={({ field: { onChange, value } }) => (
            <>
              <PickerContainer hasError={!!errors.gender}>
                <Picker selectedValue={value} onValueChange={onChange}>
                  <Picker.Item label="Selecione seu gênero" value="" />
                  <Picker.Item label="Masculino" value="Masculino" />
                  <Picker.Item label="Feminino" value="Feminino" />
                  <Picker.Item label="Outro" value="Outro" />
                </Picker>
              </PickerContainer>
              {errors.gender && <ErrorText>{errors.gender.message}</ErrorText>}
            </>
          )}
        />

        <Controller
          control={control}
          name="cpf"
          render={({ field: { onChange, value } }) => (
            <>
              <StyledMaskedInput
                type="cpf"
                placeholder="CPF"
                onChangeText={onChange}
                value={value}
                hasError={!!errors.cpf}
              />
              {errors.cpf && <ErrorText>{errors.cpf.message}</ErrorText>}
            </>
          )}
        />

        <SubmitButton onPress={handleSubmit(onSubmit)}>
          <SubmitButtonText>Cadastrar</SubmitButtonText>
        </SubmitButton>
      </FormContainer>
    </ScrollView>
  );
}
