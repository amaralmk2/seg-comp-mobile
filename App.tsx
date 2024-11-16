import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // Adicionado
import { useFonts } from 'expo-font';

import Login from './src/screens/Auth/Login'; // Sua tela de Login
import { RootNavigator } from 'src/screens';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null; // Exibe nada até as fontes serem carregadas
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
      </View>
  );
}

