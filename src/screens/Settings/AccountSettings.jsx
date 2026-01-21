import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useContext } from 'react'
import AppHeader from '../../components/Header/AppHeader'
import { useNavigation } from '@react-navigation/native'
import { accountDeletion, toggles } from '../../data/dummyData'
import SettingsCard from '../../components/SettingsCard'
import AppText from '../../components/AppText'
import { ThemeContext } from '../../context/ThemeContext'

const AccountSettings = () => {
  const [toggleValues, setToggleValues] = useState(
    toggles.reduce((acc, cur) => ({ ...acc, [cur.id]: cur.value }), {})
  );
  const { colors } = useContext(ThemeContext);

  const handleToggle = (id) => {
    setToggleValues((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleDeleteAccount = () => {
    console.log('Delete Account Clicked');
    // add alert / confirmation
  };
  const navigation = useNavigation();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <AppHeader
        title="Account Settings"
        leftIcon="arrow-left"
        onLeftPress={() => navigation.goBack()}
      />
      <AppText.body style={styles.text}>Community</AppText.body>
      {toggles.map((item) =>
        <SettingsCard
          key={item.id}
          title={item.title}
          toggle={true}
          value={toggleValues[item.id]}
          onToggle={() => handleToggle(item.id)}
        />
      )}
      <AppText.body style={styles.text} >Account Deletion</AppText.body>
      <SettingsCard
        title={accountDeletion.title}
        icon={accountDeletion.icon}
        onPress={handleDeleteAccount}
      />


    </View>
  )
}

export default AccountSettings

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "#E97639",
    padding: 12
  }
})