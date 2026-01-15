import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeScreen from "../screens/HomeScreen";
import ProductDetails from "../screens/ProductDetails";
import NotificationScreen from "../screens/notifications/NotificationScreen";

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ProductDetails" component={ProductDetails} />
            {/* <Stack.Screen name="NotificationScreen" component={NotificationScreen} /> */}

        </Stack.Navigator>
    )
}

export default AppNavigator;