import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react"
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";

const RootNavigator=()=>{
    const [isLoggedIn,setIsLoggedIn] =useState(null);

    return(
        <NavigationContainer>
            {isLoggedIn?<AppNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
    )
}
export default RootNavigator;