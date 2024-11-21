import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';
import { HomeStack } from '../navigation/HomeStack';
import { LoginStack } from '../navigation/LoginStack';
import { RegisterUserStack } from '../navigation/RegisterUserStack';

const RootStack = createStackNavigator<RootStackParamList>();

export function RootNavigator() {
  return (
      <RootStack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
        <RootStack.Screen name="HomeScreen" component={HomeStack} />
        <RootStack.Screen name="LoginScreen" component={LoginStack} />
        <RootStack.Screen name="RegisterUserScreen" component={RegisterUserStack} />
      </RootStack.Navigator>
  );
}
