
import { Header, TitleHeader, IconContainer } from './style';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


export function HeaderApp() {
  return (
    <Header>
      <FontAwesome5 name="keycdn" size={40} color="white" style={{ marginTop: 28 }}/>
      <TitleHeader>Portal de Segurança Pública</TitleHeader>
    </Header>
  );
}