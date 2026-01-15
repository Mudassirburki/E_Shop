import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NotificationScreen from "../../screens/notifications/NotificationScreen";
import NotificationSettings from "../../screens/notifications/NotificationSettings";

const Stack = createNativeStackNavigator();
const NavigationStack=()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Notification" component={NotificationScreen} />
            <Stack.Screen name="NotificationSettings" component={NotificationSettings} />
        </Stack.Navigator>
    )
}
export default NavigationStack;