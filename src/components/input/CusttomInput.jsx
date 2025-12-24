import { StyleSheet, TextInput, View } from "react-native"

const CusttomInput=({
   value,
   onChangeText,
   placeholder,
   secureTextEntry=false,
   keyboardType="default",
   style,

})=>{
return(
    <View style={styles.container}>
        <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={[styles.input,style]}
        placeholderTextColor="#999"
        />
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
});
export default CusttomInput;