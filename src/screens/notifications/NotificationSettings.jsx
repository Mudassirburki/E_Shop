import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppHeader from '../../components/Header/AppHeader'
import { useNavigation } from '@react-navigation/native';

const NotificationSettings = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <AppHeader title="Notification Preferences"
        leftIcon="ArrowLeft"
        leftIconType="lucide" 
        onLeftPress={() => navigation.goBack()}
        />
    
     
   
 
      
    </View>
  )
}

export default NotificationSettings

const styles = StyleSheet.create({
    container: { flex: 1}
})