import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native"

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { FONT } from "../responsive/AppResponsive";

const CusttomInput = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
  style,
  ...props

}) => {
  const [isSecure, setIsSecure] = useState(secureTextEntry);
  return (
    <View style={styles.wrapper}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={isSecure}
        style={[
          styles.input,
          secureTextEntry && { paddingRight: 45 }, // icon ke liye space
        ]}
        {...props}
      />

      {/* Eye icon INSIDE input */}
      {secureTextEntry && (
        <TouchableOpacity
          style={styles.eyeIcon}
          onPress={() => setIsSecure(!isSecure)}
        >
          <Ionicons
            name={isSecure ? "eye" : "eye-off"}
            size={22}
            color="#777"
          />
        </TouchableOpacity>
      )}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  wrapper: {
    position: "relative",
    marginTop: 12,
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 14,
    fontSize: FONT.regular,
  },
  eyeIcon: {
    position: "absolute",
    right: 14,
    top: 0,
    bottom: 0,
    justifyContent: "center",
  },
});
export default CusttomInput;