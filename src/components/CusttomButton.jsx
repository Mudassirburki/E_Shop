import { StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import AppText from "./AppText";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const CusttomButton = ({
  title,
  onPress,
  loading = false,
  color,             // 👈 Dynamic default
  textColor,         // 👈 Dynamic default
  style,
}) => {
  const { colors } = useContext(ThemeContext);

  const backgroundColor = color || "#E97639"; // Primary/Brand color usually constant, or could use colors.primary
  const finalTextColor = textColor || "#fff";

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      activeOpacity={0.7}
      style={[
        styles.button,
        { backgroundColor: backgroundColor },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={finalTextColor} />
      ) : (
        <AppText.body style={[styles.text, { color: finalTextColor }]}>
          {title}
        </AppText.body>
      )}
    </TouchableOpacity>
  );
};

export default CusttomButton;
const styles = StyleSheet.create({
  button: {
    height: 50,

    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,

  },
  text: {
    fontWeight: "600",
  },
});
