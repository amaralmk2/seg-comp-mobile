import { StackNavigationProp } from '@react-navigation/stack';

// Define as rotas e seus parâmetros
export type RootStackParamList = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  RegisterUserScreen: undefined;
  ContactScreen: undefined;
  OcurrenceMapScreen: undefined;
  DailyTipsScreen: undefined;
};

export type RootNavigationProp = StackNavigationProp<RootStackParamList>;
