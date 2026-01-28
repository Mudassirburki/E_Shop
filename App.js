import React from "react";
import { View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import RootNavigator from "./src/navigation/RootNavigator";
import { AuthProvider } from "./src/context/AuthContext";
import { ThemeProvider } from "./src/context/ThemeContext";
import { BookmarksProvider } from "./src/context/BookmarksContext";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  
  const [fontsLoaded] = useFonts({
    "Manrope-Regular": require("./assets/fonts/Manrope-Regular.ttf"),
    "Manrope-Medium": require("./assets/fonts/Manrope-Medium.ttf"),
    "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#2E55BA" />
      </View>
    );
  }

  return (
    <AuthProvider>
      <ThemeProvider>
        <BookmarksProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </BookmarksProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
