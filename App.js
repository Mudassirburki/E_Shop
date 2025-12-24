import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppText from "./src/components/AppText"

export default function App() {
  return (
    
    
    <View style={styles.container}>
      <AppText type='p'>Heloo</AppText>
      <StatusBar style="auto" />
    </View>
    
  );
  console.log("hio");
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
