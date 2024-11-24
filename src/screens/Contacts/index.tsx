import {ScrollView, Text, View, } from "react-native";
import { HeaderApp } from "../../components/Header"
import { Container, SubTitle, TitleSubContainer} from "./style";
import { useNavigation } from "@react-navigation/native";
import { RootNavigationProp } from "src/types/navigation";

export default function Contact() {
  
  return (
    <View>
      <HeaderApp />
      <SubTitle>
      <TitleSubContainer>Início</TitleSubContainer>
      <TitleSubContainer>Formulários</TitleSubContainer>
      <TitleSubContainer>Mapa</TitleSubContainer>
      <TitleSubContainer>Contatos</TitleSubContainer>
      </SubTitle>
    </View>
  );
}
