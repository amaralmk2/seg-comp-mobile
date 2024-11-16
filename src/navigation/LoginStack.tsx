import { createStackNavigator } from '@react-navigation/stack';
import Login from 'src/screens/Auth/Login';

const Stack = createStackNavigator()

export function LoginStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
         </Stack.Navigator>
    )
}