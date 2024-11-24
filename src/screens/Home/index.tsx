import {ScrollView } from "react-native";
import {useState } from 'react'; 
import {ContainerForm, TextForm, SearchContainer, Input, IconContainer } from "./style"; 
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native";
import { RootNavigationProp } from "src/types/navigation";

export default function Home() {

  const [searchText, setSearchText] = useState('');

  const navigation = useNavigation<RootNavigationProp>();

  // const data = [
  //   { id: 1, title: "Mapa Interativo", icon: <FontAwesome6 name="location-dot" size={40} color="#FF7733" /> },
  //   { id: 2, title: "Contatos Importantes", icon: <AntDesign name="exclamationcircleo" size={40} color="#FF7733" /> },
  //   { id: 3, title: "Dicas", icon: <FontAwesome5 name="exclamation-triangle" size={40} color="#FF7733" /> },
  // ];

  // const filteredData = data.filter(item =>
  //   item.title.toLowerCase().includes(searchText.toLowerCase()) 
  // );

  return (
    <ScrollView>
      <SearchContainer>
        <Input 
          placeholder="Buscar..." 
          placeholderTextColor="#888" 
          value={searchText} 
          onChangeText={(text: string) => setSearchText(text)} 
        />
        <IconContainer>
        <Ionicons name="search-sharp" size={34} color="black" />
        </IconContainer>
      </SearchContainer>
          <ContainerForm onPress={() => {navigation.navigate("OcurrenceMapScreen")}}>
            <FontAwesome6 name="location-dot" size={40} color="#FF7733" />
            <TextForm>Mapa de Ocorrências</TextForm>
          </ContainerForm>

          <ContainerForm onPress={() => {navigation.navigate("ContactScreen")}} >
            <AntDesign name="exclamationcircleo" size={40} color="#FF7733" />
            <TextForm>Contatos Importantes</TextForm>
          </ContainerForm>

          <ContainerForm >
            <FontAwesome5 name="exclamation-triangle" size={40} color="#FF7733" /> 
            <TextForm>Dicas</TextForm>
          </ContainerForm>
    </ScrollView>
  );
}
