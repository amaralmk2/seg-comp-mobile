import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { HeaderApp } from './components/Header';
import { useFonts } from 'expo-font';
import  Home  from './screens/Home';
import Login from './screens/Login';
import AppLoading from 'expo-app-loading';


export default function App() {

  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
      <Login/>
  );
}
