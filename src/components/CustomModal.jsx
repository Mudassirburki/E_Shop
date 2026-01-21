import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { X, Check } from "lucide-react-native";
import { useTheme } from "../context/ThemeContext";
import AppText from "./AppText";

const CustomModal = ({
  visible,
  onClose,
  title,
  desc,
  data,
  onSelect,
  currentValue,
}) => {
  const { colors, spacing, radius } = useTheme();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View
          style={[
            styles.modalContent,
            { backgroundColor: colors.background, borderRadius: radius.lg },
          ]}
        >
          <TouchableOpacity style={{ marginLeft: "auto" }} onPress={onClose}>
            <X size={24} color={colors.foreground} />
          </TouchableOpacity>
          <View style={[styles.header, { borderBottomColor: colors.border }]}>
            <AppText.h2 style={{ color: colors.foreground }}>
              {title}
            </AppText.h2>
            <AppText.small style={{ color: colors.foreground }}>
              {desc}
            </AppText.small>
          </View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.option,
                  { borderBottomColor: colors.border },
                  currentValue === item.value && {
                    backgroundColor: colors.card,
                  },
                ]}
                onPress={() => {
                  onSelect(item.value);
                  onClose();
                }}
              >
                <AppText.body style={{ color: colors.foreground }}>
                  {item.label}
                </AppText.body>
                {currentValue === item.value && (
                  <Check size={20} color={colors.primary} />
                )}
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    width: "100%",
    height: "35%",
    padding: 20,
  },
  header: {
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 0.5,
  },
});

export default CustomModal;
