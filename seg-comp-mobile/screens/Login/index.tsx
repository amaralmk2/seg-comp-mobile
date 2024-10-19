import { View, Text, TouchableOpacity } from "react-native";
import { HeaderApp } from "../../components/Header";
import { BottomSend, Container, ContainerForm, Input, SubTitle, TitleForm, TextBottom, EndSubTitle } from "./style";
import { ContainerField } from "./style";



export default function Login() {
  return (
    <View>
      <HeaderApp></HeaderApp>
    
      <Container>
        <ContainerForm>
            <TitleForm>Entre em sua conta</TitleForm>
            <ContainerField>
                <SubTitle>E-mail</SubTitle>
                <Input></Input>
            </ContainerField>
            <ContainerField>
                <SubTitle>Senha:</SubTitle>
                <Input></Input>
            </ContainerField>
            <BottomSend><TextBottom>Entrar</TextBottom></BottomSend>
        </ContainerForm>

        
      </Container>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.w3schools.com')}>
        <EndSubTitle>Ainda não tem cadastro? Cadastre-se</EndSubTitle>
      </TouchableOpacity>

    </View>
  );
}