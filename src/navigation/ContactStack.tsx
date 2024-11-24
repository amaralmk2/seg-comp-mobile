import { createStackNavigator } from '@react-navigation/stack';
import Contact from 'src/screens/Contacts';

const Stack = createStackNavigator()

export function ConctactStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Contact" component={Contact} />
         </Stack.Navigator>
    )
}