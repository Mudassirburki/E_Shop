import { FlatList, StyleSheet, View, Switch, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/AuthContext';
import AppHeader from '../../components/Header/AppHeader';
import { User_Profile, SETTINGS_MENU } from '../../data/dummyData';
import ProfileSettingsCard from '../../components/ProfileSettingsCard';
import ListRow from '../../components/common/ListRow';
import AppText from '../../components/AppText';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ChevronRight } from 'lucide-react-native';

const Settings = () => {
  const { logout } = useContext(AuthContext);
  const navigation = useNavigation();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const handleItemPress = async (item) => {
  if (item.type === 'logout') {
    await logout();
    return;
  }

  if (item.type === 'navigation' && item.screen) {
    navigation.navigate(item.screen);
  }
};



  const renderMenuItem = ({ item }) => {
  const isLogout = item.type === 'logout';

  return (
    <ListRow
      onPress={() => handleItemPress(item)}
      containerStyle={styles.menuItem}
      left={
        <View style={styles.iconWrapper}>
          <Icon
            name={item.icon}
            size={24}
            color={isLogout ? 'red' : '#333'}
          />
        </View>
      }
      center={
        <AppText.body style={[styles.menuTitle, isLogout && styles.logoutText]}>
          {item.title}
        </AppText.body>
      }
      right={
        item.type === 'toggle' ? (
          <Switch
            value={notificationsEnabled}
            onValueChange={setNotificationsEnabled}
          />
        ) : item.type === 'value' ? (
          <AppText.small style={styles.valueText}>
            {item.value}
          </AppText.small>
        ) : !isLogout ? (
          <ChevronRight size={20} color="#ccc" />
        ) : null
      }
    />
  );
};


  return (
    <View style={styles.container}>
      <AppHeader title="Settings" />

      <FlatList
        data={[...User_Profile, ...SETTINGS_MENU]}
        keyExtractor={(item) => item.id.toString() + (item.title || item.name)}
        renderItem={({ item }) => {
          if (item.email) {
            return <ProfileSettingsCard user={item} />
          }
          return renderMenuItem({ item });
        }}
        contentContainerStyle={{ padding: 16 }}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
      />

    </View>
  )
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  menuItem: {
    paddingVertical: 12,
  },
  iconWrapper: {
    width: 40,
    alignItems: 'center',
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginLeft: 8,
  },
  logoutText: {
    color: 'red',
  },
  valueText: {
    color: '#2E55BA',
    fontWeight: '600',
  }
})