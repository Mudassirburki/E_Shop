import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState, useContext } from "react";
import AppText from "./AppText";
import { ThemeContext } from "../context/ThemeContext";

const CustomDropdown = ({ data, onSelect, placeholder }) => {
  const { colors } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (item) => {
    setSelected(item);
    onSelect(item);
    setOpen(false);
  };

  return (
    <View>
      {/* Dropdown Header */}
      <TouchableOpacity
        style={styles.header}
        onPress={() => setOpen(!open)}
      >
        <Ionicons name="location" size={20} color="#BB4100" />
        <AppText.body style={[styles.text, { color: colors.foreground }]}>
          {selected ? selected : placeholder}
        </AppText.body>
        <Ionicons
          name={open ? "chevron-up" : "chevron-down"}
          size={20}
          style={{ marginRight: 19 }}
          color={colors.secondary}
        />
      </TouchableOpacity>

      {/* Dropdown List */}
      {open && (
        <View style={[styles.list, { backgroundColor: colors.card, borderColor: colors.border }]}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.item, { borderBottomColor: colors.border }]}
              onPress={() => handleSelect(item)}
            >
              <AppText.body style={{ color: colors.foreground }}>{item}</AppText.body>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    width: "50%",
    padding: 14,

  },
  text: {
    flex: 1,
    marginLeft: 10,
    color: "#333",
  },
  list: {
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 5,
  },
  item: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
