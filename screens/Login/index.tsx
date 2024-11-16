import {ScrollView } from "react-native";
import { HeaderApp } from "../../components/Header";
import { Container, EndSubTitle, Link } from "./style";
import { LoginForm } from "./components/loginForm";

export default function Login() {
  return (
    <ScrollView>
      <HeaderApp />
      <Container>
        <LoginForm />
      </Container>
      <Link>
        <EndSubTitle>Ainda não tem cadastro? Cadastre-se</EndSubTitle>
      </Link>
    </ScrollView>
  );
}
