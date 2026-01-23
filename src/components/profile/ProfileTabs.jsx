import React, { useContext } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ThemeContext } from '../../context/ThemeContext';
import { FONT_FAMILY } from '../../theme/Fonts';

import Bookmarks from './tabs/Bookmarks';
import MyDeals from './tabs/MyDeals';
import ViewedDeals from './tabs/ViewedDeals';
import Interaction from './tabs/Interaction';

const Tab = createMaterialTopTabNavigator();

const ProfileTabs = () => {
    const { colors } = useContext(ThemeContext);

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    fontFamily: FONT_FAMILY.bold,
                    textTransform: 'none',
                    fontSize: 13,
                },
                tabBarActiveTintColor: "#E97639",
                tabBarInactiveTintColor: colors.secondary,
                tabBarStyle: {
                    backgroundColor: colors.background,
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomWidth: 1,
                    borderBottomColor: colors.border,
                    marginTop:10
                },
                tabBarIndicatorStyle: {
                    backgroundColor: "#E97639",
                    height: 2,
                    borderRadius: 3,
                },
                tabBarScrollEnabled: true,
                tabBarItemStyle: {
                    width: 'auto',
                    paddingHorizontal: 20,
                }
            }}
        >
            <Tab.Screen name="Bookmarks" component={Bookmarks} />
            <Tab.Screen name="My Deals" component={MyDeals} />
            <Tab.Screen name="Viewed Deals" component={ViewedDeals} />
            <Tab.Screen name="Interaction" component={Interaction} />
        </Tab.Navigator>
    );
};

export default ProfileTabs;
