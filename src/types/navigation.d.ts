import { StackNavigationProp } from '@react-navigation/stack';

// Define as rotas e seus parâmetros
export type RootStackParamList = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  RegisterUserScreen: undefined;
};

// Exportando o tipo do `useNavigation` já pronto
export type RootNavigationProp = StackNavigationProp<RootStackParamList>;
