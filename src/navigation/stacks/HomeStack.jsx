import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/HomeScreen";
import ProductDetails from "../../screens/ProductDetails";

const Stack =createNativeStackNavigator();
export const HomeStack=()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="HomeMain" component={HomeScreen}/>
            {/* <Stack.Screen name="ProductDetails" component={ProductDetails}/> */}

        </Stack.Navigator>
    )
}

export default HomeStack;