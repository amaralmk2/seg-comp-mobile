import { ScrollView } from "react-native";
import UserRegistration from "./components/registerUser";

export function createUser() {
    return (
        <ScrollView>
            <UserRegistration />
        </ScrollView>
    );
}