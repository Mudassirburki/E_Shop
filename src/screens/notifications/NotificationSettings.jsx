import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import AppHeader from '../../components/Header/AppHeader'
import { useNavigation } from '@react-navigation/native';
import { Notification_Settings } from '../../data/dummyData';
import NotificationCard from '../../components/NotificationCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppText from '../../components/AppText';

const NotificationSettings = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <AppHeader title="Notification Preferences"
        leftIcon="ArrowLeft"
        leftIconType="lucide"
        onLeftPress={() => navigation.goBack()}
      />

      <SafeAreaView style={styles.listContainer}>
        <AppText.body style={{color:"#E97639"}}>Personalized Keyword Notifications</AppText.body>
        <FlatList
          data={Notification_Settings.filter(item => item.type === "personalized")}
          keyExtractor={(item) => (item.id ? item.id.toString() : Math.random().toString())}
          renderItem={({ item }) => (
            <NotificationCard
              item={item}
              variant="settings"
              onPress={() => console.log('Setting pressed:', item.title)}
            />
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
         <AppText.body style={{color:"#E97639"}}>General</AppText.body>
          <FlatList
          data={Notification_Settings.filter(item => item.type === "general")}
          keyExtractor={(item) => (item.id ? item.id.toString() : Math.random().toString())}
          renderItem={({ item }) => (
            <NotificationCard
              item={item}
              variant="settings"
              onPress={() => console.log('Setting pressed:', item.title)}
            />
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
         
      </SafeAreaView>
    </View>
  )
}

export default NotificationSettings

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  listContainer: {  padding: 16}
})