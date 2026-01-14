import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../../theme/Colors";

const AppHeader = ({
  title,
  leftIcon,
  rightIcon,
  onLeftPress,
  onRightPress,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Left Icon */}
      <TouchableOpacity onPress={onLeftPress} style={styles.iconButton}>
        {leftIcon ? (
          <Icon name={leftIcon} size={24} color={Colors.foreground} />
        ) : (
          <View style={styles.placeholder} />
        )}
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>

      {/* Right Icon */}
      <TouchableOpacity onPress={onRightPress} style={styles.iconButton}>
        {rightIcon ? (
          <Icon name={rightIcon} size={24} color={Colors.foreground} />
        ) : (
          <View style={styles.placeholder} />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
  container: {
    minHeight: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.background,
    borderBottomColor: Colors.muted,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    color: Colors.foreground,
  },
  iconButton: { width: 40, alignItems: "center", justifyContent: "center" },
  placeholder: { width: 24, height: 24 },
});
