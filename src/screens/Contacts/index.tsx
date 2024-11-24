  import {ScrollView, Text, View, Linking, StyleSheet  } from "react-native";
  import { HeaderApp } from "../../components/Header"
  import { Container, SubTitle, TitleSubContainer, Title, TextSubTitle, ContainerText, TitleInContainer, IconContainer, ContainerText2, TitleInContainer3, TitleInContainer2} from "./style";
  import { useNavigation } from "@react-navigation/native";
  import { RootNavigationProp } from "src/types/navigation";
  import Ionicons from '@expo/vector-icons/Ionicons';
  import Map from "react-native-maps";

    export default function Contact() {
      const openLink = () => {
        Linking.openURL("https://delegaciavirtual.sinesp.gov.br/portal/");
      };
    
    return (
      <ScrollView>
        <SubTitle>
        <TitleSubContainer>Início</TitleSubContainer>
        <TitleSubContainer>Formulários</TitleSubContainer>
        <TitleSubContainer>Mapa</TitleSubContainer>
        <TitleSubContainer>Contatos</TitleSubContainer>
        </SubTitle>
        <Title>SITES</Title>
        <TextSubTitle>Registro de Boletim de Ocorrência</TextSubTitle>
        <ContainerText><TitleInContainer3>https://delegaciavirtual.sinesp.gov.br/portal/</TitleInContainer3></ContainerText>
        <Title>CONTATOS</Title>
        <TextSubTitle>Emergência Policial</TextSubTitle>
        <ContainerText><TitleInContainer>190</TitleInContainer></ContainerText>
        <TextSubTitle>Serviço de atendimento móvel de urgência</TextSubTitle>
        <ContainerText><TitleInContainer>192</TitleInContainer></ContainerText>
        <TextSubTitle>Central de atendimento à Mulher</TextSubTitle>
        <ContainerText><TitleInContainer>180</TitleInContainer></ContainerText>
        <ContainerText2><IconContainer><Ionicons name="location-sharp" size={40} color="black" /></IconContainer><TitleInContainer2>Mapa - Unidades Policiais</TitleInContainer2></ContainerText2>
        <View style={styles.container}>
          <Map style={StyleSheet.absoluteFill}
               initialRegion={{
                latitude: -14.803964463346052,
                longitude: -39.0316702028164,
                latitudeDelta: 0.005,
                longitudeDelta: 0.005,
               }}                
          />  
        </View>
        <Title>UNIDADES FISICAS</Title>
        <TextSubTitle>Delegacia Polícia Civil Ilhéus BA</TextSubTitle>
        <ContainerText><TitleInContainer>Av. Cel. Misael Tavares, 253 - Centro</TitleInContainer></ContainerText>
        <TextSubTitle>69ª CIPM - Unidade Policial Militar</TextSubTitle>
        <ContainerText><TitleInContainer>Caminho 20 - Hernani Sá</TitleInContainer></ContainerText>
        <TextSubTitle>68ª CIPM - Unidade Policial Militar</TextSubTitle>
        <ContainerText><TitleInContainer>Rua Dom Bendito Zorzi, nº145, R. dos Carilos - Conquista</TitleInContainer></ContainerText>
        <TextSubTitle>70ª CIPM - Unidade Policial Militar</TextSubTitle>
        <ContainerText><TitleInContainer>Km 03, 335, BA-262 - Distrito Industrial</TitleInContainer></ContainerText>
        <TextSubTitle>Polícia Rodoviária Estadual</TextSubTitle>
        <ContainerText><TitleInContainer>Rod. Jorge Amado, 112 - Ilhéus, BA</TitleInContainer></ContainerText> 
        <View style={styles.space}>
          </View> 
      </ScrollView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      width: 381,
      height: 418,
      marginLeft: 15,
      marginTop: 15,
      
    },

    space:{
      height: 55,
    },
  })