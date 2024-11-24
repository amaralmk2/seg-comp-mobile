import { BottomSend, ContainerForm, Input, SubTitle, TitleForm, TextBottom, TextErros } from "../style";
import { ContainerField } from "../style";
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { validationSchema } from "./validationSchema";
import { AuthContext } from "src/context/auth-context/auth-context";
import React, { useContext, useEffect } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { RootNavigationProp } from "src/types/navigation";
import { ActivityIndicator } from "react-native-paper";
  interface FormData {
    email: string;
    password: string;
  }
export function LoginForm() {
    const {login,logout, isAuthenticated, error, loading} = useContext(AuthContext);

    const navigation = useNavigation<RootNavigationProp>();

    useEffect(() => {
      if (isAuthenticated) {
        console.log("Login bem-sucedido");
        navigation.navigate("HomeScreen");
      }
    }, [isAuthenticated, navigation]);
    async function onSubmit (data: FormData) {
       const { email, password } = data
       await login(email, password);
    };

      const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>({
        resolver: zodResolver(validationSchema),
      });

      useFocusEffect(
        React.useCallback(() => {
          logout();
          control._reset();
        }, [logout])
      );
    
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
          {loading ? 
          (
             <ActivityIndicator size="large" color="black" />
          ) 
          : 
          (
            <BottomSend onPress={handleSubmit(onSubmit)}>
                <TextBottom>Entrar</TextBottom>
            </BottomSend>
          )}
          
        </ContainerForm>
    )
}