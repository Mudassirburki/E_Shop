import { StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native";
import AppText from "./AppText";

const CusttomButton = ({
  title,
  onPress,
  loading = false,
  color = "#E97639",      // 👈 default bg color
  textColor = "#fff",     // 👈 default text color
  style,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      activeOpacity={0.7}
      style={[
        styles.button,
        { backgroundColor: color }, // 👈 dynamic bg
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={textColor} />
      ) : (
        <AppText.body style={[styles.text, { color: textColor }]}>
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
