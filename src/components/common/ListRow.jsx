import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";

const ListRow = ({ left, center, right, onPress, containerStyle, centerStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.row, containerStyle]} disabled={!onPress}>
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
    backgroundColor: "#fff",
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
