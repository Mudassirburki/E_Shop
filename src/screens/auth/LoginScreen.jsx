import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CusttomInput from "../../components/input/CusttomInput";
import CusttomButton from "../../components/CusttomButton";
import AppText from "../../components/AppText";
import { Image } from "expo-image";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    console.log("hello");
  };

  return (
    <View style={styles.container}>
      <Image
        style={{
          height: 100,
          width: 100,
          contentFit: "contain",
          alignSelf: "center",
          marginTop:100,marginBottom:100,
        }}
        source={require("../../../assets/logo.png")}
      />
      <AppText.h1 style={{ alignSelf: "flex-start" }}>
        Sign in to your {"\n"} Account
      </AppText.h1>
      <CusttomInput
        placeholder="Enter your Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <CusttomInput
        placeholder="Enter your Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />

      <CusttomButton title="Login" onPress={handleLogin} />
      <AppText.small style={{ alignSelf: "center" }}>
        or login in with
      </AppText.small>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
