import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import AppText from "./src/components/AppText"
import RootNavigator from './src/navigation/RootNavigator';
import { AuthProvider } from './src/context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigator/>
      </NavigationContainer>
    </AuthProvider>
   
  );
  
  
}


