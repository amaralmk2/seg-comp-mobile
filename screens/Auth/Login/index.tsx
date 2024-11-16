import {ScrollView, Text } from "react-native";
import { HeaderApp } from "../../../components/Header/index";
import { Container, EndSubTitle, Link } from "./style";
import { LoginForm } from "./components/LoginForm";

export default function Login() {
  return (
    <ScrollView>
      <HeaderApp />
      <Container>
        <LoginForm />
        <Link>
          <EndSubTitle>Ainda não tem cadastro? Cadastre-se</EndSubTitle>
        </Link>
      </Container>
    </ScrollView>
  );
}
