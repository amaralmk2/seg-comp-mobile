import { createStackNavigator } from '@react-navigation/stack';
import Home from 'src/screens/Home';

const Stack = createStackNavigator()

export function HomeStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
         </Stack.Navigator>
    )
}