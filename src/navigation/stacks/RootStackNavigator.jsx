import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductDetails from "../../screens/ProductDetails";
import BottomsTabNavigator from "../BottomsTabNavigator";

const Stack = createNativeStackNavigator();
const RootStackNavigator=()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="BottomTab" component={BottomsTabNavigator}/>
            <Stack.Screen name="ProductDetails" component={ProductDetails}/>
        </Stack.Navigator>
    )
}
export default RootStackNavigator;