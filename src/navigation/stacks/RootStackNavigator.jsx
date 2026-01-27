import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetails from "../../screens/ProductDetails";
import BottomsTabNavigator from "../BottomsTabNavigator";
import NotificationScreen from "../../screens/notifications/NotificationScreen";
import NavigationStack from "../NavigationStack/NavigationStack";
import AccountSettings from "../../screens/Settings/AccountSettings";
import FilterScreen from "../../screens/filters/FilterScreen";
import CategoryScreen from "../../screens/filters/CategoryScreen";
import BrandScreen from "../../screens/filters/BrandScreen";

const Stack = createNativeStackNavigator();
const RootStackNavigator=()=>{
    return(
        <Stack.Navigator  screenOptions={{headerShown:false,statusBarStyle:"dark"}}>
            <Stack.Screen name="BottomTab" component={BottomsTabNavigator}/>
            <Stack.Screen name="ProductDetails" component={ProductDetails}/>
            <Stack.Screen name="NotificationScreen" component={NavigationStack}/>
            <Stack.Screen name="AccountSettings" component={AccountSettings}/>
            <Stack.Screen name="FilterScreen" component={FilterScreen}/>
            <Stack.Screen name="Category" component={CategoryScreen}/>
            <Stack.Screen name="Brand" component={BrandScreen}/>
        </Stack.Navigator>
    )
}
export default RootStackNavigator;