import { StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppText from '../components/AppText'
import { ThemeContext } from '../context/ThemeContext'
import ProfileHeader from '../components/profile/ProfileHeader'
import Avatar from '../components/profile/Avatar'
import UserInfo from '../components/profile/UserInfo'
import StatsRow from '../components/profile/StatsRow'
import ProfileTabs from '../components/profile/ProfileTabs'

const Profile = () => {
  const { colors } = useContext(ThemeContext);
  return (
    // <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>

    // </SafeAreaView>
    <View style={{ flex: 1 ,backgroundColor:colors.background}}>
      <ProfileHeader />
      <Avatar />
      <UserInfo />
      <StatsRow />
      <ProfileTabs />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})