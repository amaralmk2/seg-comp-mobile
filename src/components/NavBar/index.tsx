import { TouchableHighlight, TouchableOpacity } from "react-native";
import { NavBarText, NavBarContainer } from "./style";
import { useNavigation } from "@react-navigation/native";
import { RootNavigationProp } from "src/types/navigation";

export function NavBar() {

    const navigation = useNavigation<RootNavigationProp>();

    return (
        <NavBarContainer>
            <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} activeOpacity={0.5}>
                <NavBarText>Início</NavBarText> 
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("OcurrenceMapScreen")} activeOpacity={0.5}>
                <NavBarText>Mapa</NavBarText>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("ContactScreen")} activeOpacity={0.5}>
                <NavBarText>Contatos e localizações</NavBarText>
            </TouchableOpacity>
            <TouchableOpacity>
                <NavBarText>Dicas diárias</NavBarText>
            </TouchableOpacity>
        </NavBarContainer>
    )
}