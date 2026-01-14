import { NavigationContainer } from "@react-navigation/native";
import { useContext, useState } from "react"
import AppNavigator from "./AppNavigator";
import AuthNavigator from "./AuthNavigator";
import { AuthContext, AuthProvider } from "../context/AuthContext";
import HomeScreen from "../screens/HomeScreen";
import { ActivityIndicator, View } from "react-native";
import BottomsTabNavigator from "./BottomsTabNavigator";
import RootStackNavigator from "./stacks/RootStackNavigator";

const RootNavigator=()=>{
     const { userToken, loading } = useContext(AuthContext);

   
  if (loading){
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return userToken ? < RootStackNavigator/> : <AuthNavigator />;
}
export default RootNavigator;