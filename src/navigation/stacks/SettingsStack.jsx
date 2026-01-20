import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "../../screens/Settings/Settings";
import AccountSettings from "../../screens/Settings/AccountSettings";

const Stack = createNativeStackNavigator();
export const SettingsStack=()=>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="SettingsMain" component={Settings}/>
            {/* <Stack.Screen name="AccountSettings" component={AccountSettings}/> */}
        </Stack.Navigator>
    )
}