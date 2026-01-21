import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../../components/Header/AppHeader";
import { useNavigation } from "@react-navigation/native";
import NotificationCard from "../../components/NotificationCard";
import { NOTIFICATION_DATA } from "../../data/dummyData";
import { ThemeContext } from "../../context/ThemeContext";


const NotificationScreen = () => {
  const navigation = useNavigation();
  const { colors } = useContext(ThemeContext);
  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <AppHeader
        title="Notifications"
        leftIcon="ArrowLeft"
        leftIconType="lucide"
        rightIcon="BellDot"
        rightIconType="lucide"
        onLeftPress={() => navigation.goBack()}
        onRightPress={() => navigation.navigate('NotificationSettings')}
      />

      <SafeAreaView
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <FlatList
          data={NOTIFICATION_DATA}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <NotificationCard item={item} variant="notification" />}
          contentContainerStyle={{ paddingBottom: 20 }}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </View>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({});
