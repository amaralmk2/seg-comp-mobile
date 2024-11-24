import {ScrollView, Text } from "react-native";
import { HeaderApp } from "../../components/Header"
import { Container} from "./style";
import { useNavigation } from "@react-navigation/native";
import { RootNavigationProp } from "src/types/navigation";

export default function Contact() {
  
  return (
    <ScrollView>
      <HeaderApp />
           
    </ScrollView>
  );
}
