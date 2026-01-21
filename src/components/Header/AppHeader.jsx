import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import * as LucideIcons from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../../theme/Colors";

import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const AppHeader = ({
  title,
  leftIcon,
  rightIcon,
  leftIconType = "material",   // 👈 default
  rightIconType = "material",  // 👈 default
  onLeftPress,
  onRightPress,
  style,
}) => {
  const insets = useSafeAreaInsets();
  const { colors } = useContext(ThemeContext);

  const renderIcon = (iconName, type, onPress) => {
    if (!iconName) return <View style={styles.placeholder} />;

    if (type === "lucide") {
      const LucideIcon = LucideIcons[iconName];
      if (!LucideIcon) return <View style={styles.placeholder} />;

      return (
        <TouchableOpacity onPress={onPress} style={styles.iconButton}>
          <LucideIcon size={24} color={colors.foreground} />
        </TouchableOpacity>
      );
    }

    // MaterialCommunityIcons (default)
    return (
      <TouchableOpacity onPress={onPress} style={styles.iconButton}>
        <Icon name={iconName} size={24} color={colors.foreground} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top, backgroundColor: colors.background, borderBottomColor: colors.border }, style]}>
      {renderIcon(leftIcon, leftIconType, onLeftPress)}

      <Text style={[styles.title, { color: colors.foreground }]} numberOfLines={1}>
        {title}
      </Text>

      {renderIcon(rightIcon, rightIconType, onRightPress)}
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
    borderBottomWidth: 1,
    borderBottomColor: Colors.muted,
    paddingHorizontal: 16,
    paddingBottom: 15,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    color: Colors.foreground,
  },
  iconButton: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  placeholder: {
    width: 24,
    height: 24,
  },
});
