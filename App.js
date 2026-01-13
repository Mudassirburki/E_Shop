import { StatusBar } from 'expo-status-bar';
import { StyleSheet,  View } from 'react-native';
import AppText from "./src/components/AppText"
import RootNavigator from './src/navigation/RootNavigator';
import { AuthProvider } from './src/context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Manrope-Regular': require('./assets/fonts/Manrope-Regular.ttf'),
    'Manrope-Medium': require('./assets/fonts/Manrope-Medium.ttf'),
    'Manrope-Bold': require('./assets/fonts/Manrope-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; // or a loading spinner
  }
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigator/>
      </NavigationContainer>
    </AuthProvider>
   
  );
  
  
}


