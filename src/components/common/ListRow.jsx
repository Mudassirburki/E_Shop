import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ListRow = ({ left, center, right, onPress, containerStyle, centerStyle }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <TouchableOpacity onPress={onPress} style={[styles.row, { backgroundColor: colors.card }, containerStyle]} disabled={!onPress}>
      <View style={styles.left}>{left}</View>
      <View style={[styles.center, centerStyle]}>{center}</View>
      <View style={styles.right}>{right}</View>
    </TouchableOpacity>
  );
};

export default ListRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    padding: 12,
    alignItems: "center",
  },
  left: {
    marginRight: 12,
  },
  center: {
    flex: 1,
  },
  right: {
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
