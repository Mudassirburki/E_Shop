import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabs from '../components/CusttomTabs';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import Profile from '../screens/Profile';
import HomeStack from './stacks/HomeStack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SettingsStack } from './stacks/SettingsStack';

const Tab = createBottomTabNavigator();

export default function BottomsTabNavigator() {
  return (
    <Tab.Navigator
   screenOptions={{
        headerShown:false
      }}
      tabBar={(props) => <CustomTabs {...props} />}
    >
        
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Settings" component={SettingsStack} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
