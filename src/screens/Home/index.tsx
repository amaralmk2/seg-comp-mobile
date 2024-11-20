import { Text, View, ScrollView } from "react-native";
import { ReactNode } from 'react';
import { HeaderApp } from "../../components/Header";
import { Container, ContainerForm, TextForm } from "./style";



export default function Home() {
  return (
    <ScrollView>
      <HeaderApp/>
    <Container>
      <ContainerForm>
        <TextForm>Mapa interativo</TextForm>
      </ContainerForm>
    </Container>
    </ScrollView>
  );
}