import { FlatList, StyleSheet, View, Switch, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../../context/AuthContext';
import { ThemeContext } from '../../context/ThemeContext';
import CustomModal from '../../components/CustomModal';
import AppHeader from '../../components/Header/AppHeader';
import { User_Profile, SETTINGS_MENU } from '../../data/dummyData';
import ProfileSettingsCard from '../../components/ProfileSettingsCard';
import ListRow from '../../components/common/ListRow';
import AppText from '../../components/AppText';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { ChevronRight } from 'lucide-react-native';

const Settings = () => {
  const { logout } = useContext(AuthContext);
  const { theme, toggleTheme, colors } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const navigation = useNavigation();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const [themeModalVisible, setThemeModalVisible] = useState(false);

  const languageOptions = [
    { label: t('english'), value: 'en' },
    { label: t('urdu'), value: 'ur' },
  ];

  const themeOptions = [
    { label: 'Light', value: 'light' },
    { label: 'Dark', value: 'dark' },
  ];

  const handleItemPress = async (item) => {
    if (item.type === 'logout') {
      await logout();
      return;
    }

    if (item.name === 'language') {
      setLanguageModalVisible(true);
      return;
    }

    if (item.name === 'theme') {
      setThemeModalVisible(true);
      return;
    }

    if (item.type === 'navigation' && item.screen) {
      navigation.navigate(item.screen);
    }
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const renderMenuItem = ({ item }) => {
    const isLogout = item.type === 'logout';

    // Dynamic values for language and theme
    let displayValue = item.value;
    if (item.name === 'language') {
      displayValue = i18n.language === 'ur' ? t('urdu') : t('english');
    } else if (item.name === 'theme') {
      displayValue = theme === 'dark' ? 'Dark' : 'Light';
    }

    return (
      <ListRow
        onPress={() => handleItemPress(item)}
        containerStyle={[styles.menuItem, { backgroundColor: colors.background }]}
        left={
          <View style={styles.iconWrapper}>
            <Icon
              name={item.icon}
              size={24}
              color={isLogout ? 'red' : colors.foreground}
            />
          </View>
        }
        center={
          <AppText.body style={[styles.menuTitle, { color: isLogout ? 'red' : colors.foreground }]}>
            {t(item.title.toLowerCase())}
          </AppText.body>
        }
        right={
          item.type === 'toggle' ? (
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
            />
          ) : (item.type === 'value' || item.name === 'language' || item.name === 'theme') ? (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <AppText.small style={[styles.valueText, { color: colors.primary }]}>
                {displayValue}
              </AppText.small>
              <ChevronRight size={20} color={colors.muted} />
            </View>
          ) : !isLogout ? (
            <ChevronRight size={20} color={colors.muted} />
          ) : null
        }
      />
    );
  };


  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <AppHeader title={t('settings')} />

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
        ItemSeparatorComponent={() => <View style={{ height: 12, }} />}
      />

      <CustomModal
        visible={languageModalVisible}
        onClose={() => setLanguageModalVisible(false)}
        title={t('selectLanguage')}
        data={languageOptions}
        onSelect={changeLanguage}
        currentValue={i18n.language}
      />

      <CustomModal
        visible={themeModalVisible}
        onClose={() => setThemeModalVisible(false)}
        title="Select Theme"
        desc="Select Your Display Preference"
        data={themeOptions}
        onSelect={toggleTheme}
        currentValue={theme}
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