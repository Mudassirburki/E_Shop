import { StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppText from '../components/AppText'
import { ThemeContext } from '../context/ThemeContext'

const Profile = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <AppText.h2>Profile</AppText.h2>
    </SafeAreaView>
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