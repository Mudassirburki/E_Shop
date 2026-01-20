import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetails from "../../screens/ProductDetails";
import BottomsTabNavigator from "../BottomsTabNavigator";
import NotificationScreen from "../../screens/notifications/NotificationScreen";
import NavigationStack from "../NavigationStack/NavigationStack";
import AccountSettings from "../../screens/Settings/AccountSettings";

const Stack = createNativeStackNavigator();
const RootStackNavigator=()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="BottomTab" component={BottomsTabNavigator}/>
            <Stack.Screen name="ProductDetails" component={ProductDetails}/>
            <Stack.Screen name="NotificationScreen" component={NavigationStack}/>
            <Stack.Screen name="AccountSettings" component={AccountSettings}/>
        </Stack.Navigator>
    )
}
export default RootStackNavigator;