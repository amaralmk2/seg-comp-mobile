  import {ScrollView, Text, View, Linking  } from "react-native";
  import { HeaderApp } from "../../components/Header"
  import { Container, SubTitle, TitleSubContainer, Title, TextSubTitle, ContainerText, TitleInContainer, IconContainer, ContainerText2, TitleInContainer2} from "./style";
  import { useNavigation } from "@react-navigation/native";
  import { RootNavigationProp } from "src/types/navigation";
  import Ionicons from '@expo/vector-icons/Ionicons';

    export default function Contact() {
      const openLink = () => {
        Linking.openURL("https://delegaciavirtual.sinesp.gov.br/portal/");
      };
    
    return (
      <ScrollView>
        <HeaderApp />
        <SubTitle>
        <TitleSubContainer>Início</TitleSubContainer>
        <TitleSubContainer>Formulários</TitleSubContainer>
        <TitleSubContainer>Mapa</TitleSubContainer>
        <TitleSubContainer>Contatos</TitleSubContainer>
        </SubTitle>
        <Title>SITES</Title>
        <TextSubTitle>Registro de Boletim de Ocorrência</TextSubTitle>
        <ContainerText><TitleInContainer>https://delegaciavirtual.sinesp.gov.br/portal/</TitleInContainer></ContainerText>
        <Title>CONTATOS</Title>
        <TextSubTitle>Emergência Policial</TextSubTitle>
        <ContainerText><TitleInContainer>190</TitleInContainer></ContainerText>
        <TextSubTitle>Serviço de atendimento móvel de urgência</TextSubTitle>
        <ContainerText><TitleInContainer>192</TitleInContainer></ContainerText>
        <TextSubTitle>Central de atendimento à Mulher</TextSubTitle>
        <ContainerText><TitleInContainer>180</TitleInContainer></ContainerText>
        <ContainerText2><IconContainer><Ionicons name="location-sharp" size={40} color="black" /></IconContainer><TitleInContainer2>Mapa - Unidades Policiais</TitleInContainer2></ContainerText2>
        
      </ScrollView>
    );
  }
