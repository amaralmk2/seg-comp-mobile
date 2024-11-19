import { ScrollView } from "react-native";
import {UserRegistration} from "./components/registerUser";

export function RegisterUser() {
    return (
        <ScrollView>
            <UserRegistration />
        </ScrollView>
    );
}