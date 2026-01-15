import { StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import CusttomInput from "../../components/input/CusttomInput";
import CusttomButton from "../../components/CusttomButton";
import AppText from "../../components/AppText";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { FONT, SPACING, SCREEN_HEIGHT } from "../../components/responsive/AppResponsive";
import { SafeAreaView } from "react-native-safe-area-context";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext)

  const validateBtn = () => {
    if (!email.trim()) {
      setError("Email required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Enter a valid email");
      return false;
    }
    if (!password.trim()) {
      setError("password is required");
      return false;
    }
    if (password.length < 6) {
      setError("password must be at least 6 characters");
      return false;
    }
    setError("");
    return true;
  };

  const handleLogin = async () => {
    if (!validateBtn()) return;

    try {
      await login(email, password);

      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    } catch (error) {
      setError(error.message); // show error message
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: SPACING.medium }} showsVerticalScrollIndicator={false}>
        <Image
          style={{
            height: heightPercentageToDP(6),
            width: widthPercentageToDP(40),
            contentFit: "contain",
            alignSelf: "center",
            marginTop: SPACING.large,
            marginBottom: SPACING.medium
          }}
          source={require("../../../assets/logo.png")}
        />
        <AppText.h1 style={{ alignSelf: "flex-start", marginBottom: SPACING.medium }}>
          Sign in to your {"\n"} Account
        </AppText.h1>
        <CusttomInput
          placeholder="Enter your Email"
          onChangeText={(text) => {
            setEmail(text)
            setError("")
          }}
          value={email}
          keyboardType="email-address"
        />
        <CusttomInput
          placeholder="Enter your Password"
          onChangeText={(text) => {
            setPassword(text)
            setError("")
          }}
          value={password}
          secureTextEntry
        />
        {error ? (
          <AppText.small style={{ color: "red", marginTop: 10 }}>{error}</AppText.small>) : null}
        <AppText.medium style={{ alignSelf: "flex-end", marginVertical: SPACING.small }}>Forgot password?</AppText.medium>

        <CusttomButton title="Login" onPress={handleLogin} color="#2E55BA" />
        <AppText.small style={{ alignSelf: "center", marginVertical: SPACING.medium }}>
          or login in with
        </AppText.small>
        <TouchableOpacity
          style={styles.googleBtn}
        >
          <Image style={{ height: 30, width: 30 }} source={require("../../../assets/googleIcon.png")} />
          <AppText.body>Continue with Google</AppText.body>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.googleBtn}
        >
          <Image style={{ height: 30, width: 30 }} source={require("../../../assets/snapchat_logo.png")} />
          <AppText.body>Continue with SnapChat</AppText.body>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", justifyContent: "center", gap: 5, marginTop: SPACING.large * 2 }}>
          <AppText.body>Don't have an account?</AppText.body>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
          >
            <AppText.medium style={{ fontWeight: "bold" }}>SignUp</AppText.medium>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff"
  },
  googleBtn: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    height: 48,
    borderRadius: 10,
    marginTop: SPACING.small,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    borderWidth: 1,
    borderColor: "#eee"
  }
});
