import { Text, View, ScrollView } from "react-native";
import { ReactNode } from 'react';
import { HeaderApp } from "../../components/Header";
import { Container, ContainerForm, TextForm } from "./style";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';



export default function Home() {
  return (
    <ScrollView>
      <HeaderApp/>
    <Container>
      <ContainerForm>
      <FontAwesome6 name="location-dot" size={40} color="black" />
        <TextForm>Mapa Interativo</TextForm>
      </ContainerForm>
      <ContainerForm>
      <AntDesign name="exclamationcircleo" size={40} color="#00274D" />
        <TextForm>Contatos Importantes</TextForm>
      </ContainerForm>
      <ContainerForm>
      <FontAwesome5 name="exclamation-triangle" size={40} color="#00274D" />
        <TextForm>Dicas</TextForm>
      </ContainerForm>
    </Container>
    </ScrollView>
  );
}