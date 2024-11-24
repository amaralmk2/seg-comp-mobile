import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { HomeStack } from '../navigation/HomeStack';
import { LoginStack } from '../navigation/LoginStack';
import { RegisterUserStack } from '../navigation/RegisterUserStack';
import { HeaderApp } from 'src/components/Header';

const RootStack = createStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
      <RootStack.Navigator initialRouteName="LoginScreen" screenOptions={{ header: () => <HeaderApp />}}>
        <RootStack.Screen name="HomeScreen" component={HomeStack} />
        <RootStack.Screen name="LoginScreen" component={LoginStack} />
        <RootStack.Screen name="RegisterUserScreen" component={RegisterUserStack} />
      </RootStack.Navigator>
  );
}
