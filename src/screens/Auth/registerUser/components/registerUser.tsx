import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Checkbox } from 'react-native-paper';
import { ErrorText, FormContainer, PickerContainer, StyledInput, SubmitButton, SubmitButtonText, Title } from "../style";
import { cepApplyMask, cpfApplyMask, dateApplyMask } from "src/utils";
import { validationSchema } from './validationSchema';

export function UserRegistration() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validationSchema),
  });

  function onSubmit (data: any) {
    console.log(data);
  };


  return (
    <ScrollView>
      <FormContainer>
        <Title>Crie a sua conta!</Title>
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
          name="birthDate"
          render={({ field: { onChange, value } }) => (
            <>
              <StyledInput
                placeholder="Data de Nascimento (DD/MM/YYYY)"
                onChangeText={(text: string) => {
                  const maskedValue = dateApplyMask(text); 
                  onChange(maskedValue); 
                }}
                value={value}
                hasError={!!errors.birthDate}
              />
              {errors.birthDate && <ErrorText>{errors.birthDate.message}</ErrorText>}
            </>
          )}
        />
        <Controller
          control={control}
          name="cpf"
          render={({ field: { onChange, value } }) => (
            <>
              <StyledInput
                type="cpf"
                placeholder="CPF"
                onChangeText={(text: string) => {
                  const maskedValue = cpfApplyMask(text);
                  onChange(maskedValue); 
                }}
                value={value}
                hasError={!!errors.cpf}
              />
              {errors.cpf && <ErrorText>{errors.cpf.message}</ErrorText>}
            </>
          )}
        />
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <>
              <StyledInput
                placeholder="E-mail"
                onChangeText={onChange}
                value={value}
                hasError={!!errors.email}
              />
              {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
            </>
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field: { onChange, value } }) => (
            <>
              <StyledInput
                placeholder="Senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                hasError={!!errors.password}
              />
              {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
            </>
          )}
        />
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field: { onChange, value } }) => (
            <>
              <StyledInput
                placeholder="Confirme a Senha"
                secureTextEntry
                onChangeText={onChange}
                value={value}
                hasError={!!errors.confirmPassword}
              />
              {errors.confirmPassword && <ErrorText>{errors.confirmPassword.message}</ErrorText>}
            </>
          )}
        />
        <Controller
          control={control}
          name="street"
          render={({ field: { onChange, value } }) => (
            <>
              <StyledInput
                placeholder="Rua"
                onChangeText={onChange}
                value={value}
                hasError={!!errors.street}
              />
              {errors.street && <ErrorText>{errors.street.message}</ErrorText>}
            </>
          )}
        />

        <Controller
          control={control}
          name="streetNumber"
          render={({ field: { onChange, value } }) => (
            <>
              <StyledInput
                placeholder="Número da Rua"
                onChangeText={onChange}
                value={value}
                hasError={!!errors.streetNumber}
              />
              {errors.streetNumber && <ErrorText>{errors.streetNumber.message}</ErrorText>}
            </>
          )}
        />
        <Controller
          control={control}
          name="zipCode"
          render={({ field: { onChange, value } }) => (
            <>
              <StyledInput
                type="zip-code"
                placeholder="CEP"
                onChangeText={(text: string) => {
                  const maskedValue = cepApplyMask(text); 
                  onChange(maskedValue); 
                }}
                value={value}
                hasError={!!errors.zipCode}
              />
              {errors.zipCode && <ErrorText>{errors.zipCode.message}</ErrorText>}
            </>
          )}
        />

        <Controller
          control={control}
          name="city"
          render={({ field: { onChange, value } }) => (
            <>
              <StyledInput
                placeholder="Cidade"
                onChangeText={onChange}
                value={value}
                hasError={!!errors.city}
              />
              {errors.city && <ErrorText>{errors.city.message}</ErrorText>}
            </>
          )}
        />
        <Controller
          control={control}
          name="privacyPolicy"
          render={({ field: { onChange, value } }) => (
              <>
                <Checkbox
                  status={value ? 'checked' : 'unchecked'}
                  onPress={() => onChange(!value)}  
                />
                {errors.privacyPolicy && <ErrorText>{errors.privacyPolicy.message}</ErrorText>}
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
