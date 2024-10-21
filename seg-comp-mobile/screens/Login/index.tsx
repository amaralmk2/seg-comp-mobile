import React from "react";
import { View, TouchableOpacity, Alert, Text, Linking } from "react-native";
import { HeaderApp } from "../../components/Header";
import { BottomSend, Container, ContainerForm, Input, SubTitle, TitleForm, TextBottom, EndSubTitle, Link } from "./style";
import { ContainerField } from "./style";
import { Formik, FormikHelpers } from 'formik'; 
import { z, ZodError } from 'zod';


const validationSchema = z.object({
  email: z.string().email("Digite um e-mail válido").nonempty("O e-mail é obrigatório"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres").nonempty("A senha é obrigatória"),
});

type LoginFormValues = {
  email: string;
  password: string;
};


const zodValidationToFormik = (schema: z.ZodSchema<LoginFormValues>) => {
  return (values: LoginFormValues) => {
    try {
      schema.parse(values);
      return {};
    } catch (e) {
      if (e instanceof ZodError) {
        return e.errors.reduce((acc: { [key: string]: string }, error) => {
          acc[error.path[0]] = error.message;
          return acc;
        }, {});
      }
      return {}; 
    }
  };
};

export default function Login() {
  return (
    <View>
      <HeaderApp />

      <Container>
        <ContainerForm>
          <TitleForm>Entre em sua conta</TitleForm>

         
          <Formik
            initialValues={{ email: "", password: "" }} 
            validate={zodValidationToFormik(validationSchema)} 
            onSubmit={(values: LoginFormValues, { setSubmitting }: FormikHelpers<LoginFormValues>) => {
          
              Alert.alert("Login", `Email: ${values.email}, Senha: ${values.password}`);
              setSubmitting(false); 
            }}
          >
            {({ handleChange, handleSubmit, values, errors, touched, handleBlur }) => (
              <>
                <ContainerField>
                  <SubTitle>E-mail</SubTitle>
                  <Input
                    value={values.email}
                    onChangeText={handleChange("email")}
                    onBlur={handleBlur("email")} 
                    placeholder="Digite seu e-mail"
                    keyboardType="email-address"
                  />
                  {touched.email && errors.email && <Text style={{ color: 'red' }}>{errors.email}</Text>}
                </ContainerField>

                <ContainerField>
                  <SubTitle>Senha</SubTitle>
                  <Input
                    value={values.password}
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    placeholder="Digite sua senha"
                    secureTextEntry 
                  />
                  {touched.password && errors.password && <Text style={{ color: 'red' }}>{errors.password}</Text>}
                </ContainerField>
                
                  <BottomSend onPress={() => handleSubmit()}>
                    <TextBottom>Entrar</TextBottom>
                  </BottomSend>
                
              </>
            )}
          </Formik>
        </ContainerForm>
      </Container>

      {/* Link para cadastro */}
      <Link onPress={() => Linking.openURL('')}>
        <EndSubTitle>Ainda não tem cadastro? Cadastre-se</EndSubTitle>
      </Link>
    </View>
  );
}
