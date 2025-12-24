import { StyleSheet, Text, TouchableOpacity } from "react-native"

const CusttomButton =({title,onPress,loading=false,style})=>{
    return (
        <TouchableOpacity
        onPress={onPress}
        disabled={loading}
        activeOpacity={0.7}
        style={[styles.button,style]}
        >
             {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}

        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: "#1642B2",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default CusttomButton;