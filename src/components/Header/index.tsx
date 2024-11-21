
import { View } from 'react-native';
import { Header, TitleHeader } from './style';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';



export function HeaderApp() {
  return (
    <Header>
      <View style={{ flexDirection: 'row' , alignItems: 'center', gap: 5}}>
        <FontAwesome5 name="keycdn" size={40} color="white" />
        <TitleHeader>VICOMP</TitleHeader>
      </View>
      <TitleHeader>Vigilância Compartilhada</TitleHeader>
    </Header>
  );
}

