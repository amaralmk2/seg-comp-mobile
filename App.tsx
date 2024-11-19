import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; // Adicionado
import { useFonts } from 'expo-font';
import { RootNavigator } from 'src/screens';
import { AuthProvider } from 'src/context/auth-context/auth-context';

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
      <AuthProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
     </AuthProvider>
        </View>
  );
}

