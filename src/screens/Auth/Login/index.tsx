import {ScrollView, Text } from "react-native";
import { HeaderApp } from "../../../components/Header/index";
import { Container, EndSubTitle, Link } from "./style";
import { LoginForm } from "./components/LoginForm";
import { useNavigation } from "@react-navigation/native";
import { RootNavigationProp } from "src/types/navigation";

export default function Login() {
  const navigation = useNavigation<RootNavigationProp>();
  return (
    <ScrollView>
      <HeaderApp />
      <Container>
        <LoginForm />
        <Link onPress={() => navigation.navigate("RegisterUserScreen")}>
          <EndSubTitle>Ainda não tem cadastro? Cadastre-se</EndSubTitle>
        </Link>
      </Container>
    </ScrollView>
  );
}
