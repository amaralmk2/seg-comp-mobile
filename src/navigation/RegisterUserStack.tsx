import { createStackNavigator } from '@react-navigation/stack';
import { RegisterUser } from 'src/screens/Auth/registerUser';

const Stack = createStackNavigator()

export function RegisterUserStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="RegisterUser" component={RegisterUser} />
         </Stack.Navigator>
    )
}