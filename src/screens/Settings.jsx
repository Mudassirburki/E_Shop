import { StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import CusttomButton from '../components/CusttomButton'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AuthContext';
import { SafeAreaView } from 'react-native-safe-area-context';

const Settings = () => {
  const { logout } = useContext(AuthContext);
  const navigation = useNavigation();
  const handleLogout = async () => {
    await logout();
  }
  return (
    <SafeAreaView style={styles.container}>
      <CusttomButton title="Logout" onPress={handleLogout} />
    </SafeAreaView>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#fff'
  }
})