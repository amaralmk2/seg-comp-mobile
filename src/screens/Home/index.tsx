import {ScrollView } from "react-native";
import {useState } from 'react'; 
import {TextForm, ButtonMenu } from "./style"; 
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { RootNavigationProp } from "src/types/navigation";

export default function Home() {

  const navigation = useNavigation<RootNavigationProp>();

  return (
    <ScrollView>
          <ButtonMenu onPress={() => {navigation.navigate("OcurrenceMapScreen")}}>
            <FontAwesome6 name="location-dot" size={40} color="#FF7733" />
            <TextForm>Mapa de Ocorrências</TextForm>
          </ButtonMenu>

          <ButtonMenu onPress={() => {navigation.navigate("ContactScreen")}} >
            <AntDesign name="exclamationcircleo" size={40} color="#FF7733" />
            <TextForm>Contatos importantes</TextForm>
          </ButtonMenu>

          <ButtonMenu onPress={() => {navigation.navigate("DailyTipsScreen")}} >
            <FontAwesome5 name="exclamation-triangle" size={40} color="#FF7733" /> 
            <TextForm>Dicas diárias de segurança</TextForm>
          </ButtonMenu>
    </ScrollView>
  );
}
