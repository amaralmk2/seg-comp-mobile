import { Text, View, ScrollView, TextInput } from "react-native";
import { ReactNode, useState } from 'react'; 
import { HeaderApp } from "../../components/Header";
import { Container, ContainerForm, TextForm, SearchContainer, Input, IconContainer } from "./style"; 
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Home() {

  const [searchText, setSearchText] = useState('');

  const data = [
    { id: 1, title: "Mapa Interativo", icon: <FontAwesome6 name="location-dot" size={40} color="#FF7733" /> },
    { id: 2, title: "Contatos Importantes", icon: <AntDesign name="exclamationcircleo" size={40} color="#FF7733" /> },
    { id: 3, title: "Dicas", icon: <FontAwesome5 name="exclamation-triangle" size={40} color="#FF7733" /> },
  ];

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase()) 
  );

  return (
    <ScrollView>
      <HeaderApp/>

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

     
      <Container>
        {filteredData.map((item) => (
          <ContainerForm key={item.id}>
            {item.icon} 
            <TextForm>{item.title}</TextForm>
          </ContainerForm>
        ))}
      </Container>
    </ScrollView>
  );
}
