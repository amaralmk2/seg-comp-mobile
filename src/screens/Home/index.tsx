import { Text, View, ScrollView } from "react-native";
import { ReactNode } from 'react';
import { HeaderApp } from "../../components/Header";
import { Container, ContainerForm, TextForm, SearchContainer, Input, IconContainer } from "./style";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';



export default function Home() {
  return (
    <ScrollView>
      <HeaderApp/>
      <SearchContainer>
        <Input placeholder="Buscar Serviços..." placeholderTextColor="#888" />
        <IconContainer>
        <Ionicons name="search-sharp" size={34} color="black" />
        </IconContainer>
      </SearchContainer>
    <Container>
      <ContainerForm>
      <FontAwesome6 name="location-dot" size={38} color="black" />
        <TextForm>Mapa Interativo</TextForm>
      </ContainerForm>
      <ContainerForm>
      <AntDesign name="exclamationcircleo" size={38} color="#00274D" />
        <TextForm>Contatos Importantes</TextForm>
      </ContainerForm>
      <ContainerForm>
      <FontAwesome5 name="exclamation-triangle" size={38} color="#00274D" />
        <TextForm>Dicas</TextForm>
      </ContainerForm>
    </Container>
    </ScrollView>
  );
}