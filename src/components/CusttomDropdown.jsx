import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

const CustomDropdown = ({ data, onSelect, placeholder }) => {
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
        <Text style={styles.text}>
          {selected ? selected : placeholder}
        </Text>
        <Ionicons
          name={open ? "chevron-up" : "chevron-down"}
          size={20}
          style={{marginRight:19}}
          color="#555"
        />
      </TouchableOpacity>

      {/* Dropdown List */}
      {open && (
        <View style={styles.list}>
          {data.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.item}
              onPress={() => handleSelect(item)}
            >
              <Text>{item}</Text>
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
    width:"50%",
    padding: 14,
   
  },
  text: {
    flex: 1,
    marginLeft: 10,
    color: "#333",
  },
  list: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: "#fff",
  },
  item: {
    padding: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
