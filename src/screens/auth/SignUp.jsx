import { Alert, StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import React, { useContext, useState } from "react";
import CusttomInput from "../../components/input/CusttomInput";
import CusttomButton from "../../components/CusttomButton";
import AppText from "../../components/AppText";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { FONT, SPACING } from "../../components/responsive/AppResponsive";

const SignUp = () => {
  const { SignUP, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const validateBtn = () => {
    if (!name.trim()) {
      setError("Name is required");
      return false;
    }
    if (!email.trim()) {
      setError("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Enter a valid email");
      return false;
    }
    if (!phoneNumber.trim()) {
      setError("Phone Number is required");
      return false;
    }
    if (!password.trim()) {
      setError("password is required");
      return false;
    }
    if (password.length < 6) {
      setError("password must be at least 6 characters long");
      return false;
    }
    if (!confirmPassword.trim()) {
      setError(" Confirm password is required");
      return false;
    }
    if (password !== confirmPassword) {
      setError("password does not match");
      return false;
    }
    setError("");
    return true;
  };

  const handleSignUp = async () => {
    if (!validateBtn()) return;

    try {
      const user = await SignUP(email, password); // signup
      await login(email, password); // auto-login

      Alert.alert("Success", "Account successfully created!");

      navigation.reset({
        index: 0,
        routes: [
          {
            name: "HomeTabs", // Tab Navigator ka name
            state: {
              index: 0,
              routes: [{ name: "HomeScreen" }], // Tab ke andar screen
            },
          },
        ],
      });


    } catch (error) {
      Alert.alert("Error", error.message);
    }
  };



  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: SPACING.medium }} showsVerticalScrollIndicator={false}>
        <Image
          style={{
            height: wp("25%"),
            width: wp("25%"),
            contentFit: "contain",
            alignSelf: "center",
            marginTop: SPACING.large,
            marginBottom: SPACING.large,
          }}
          source={require("../../../assets/logo.png")}
        />
        <AppText.h1 style={{ alignSelf: "flex-start", marginBottom: SPACING.medium }}>Sign up</AppText.h1>
        <AppText.small style={{ marginBottom: SPACING.regular }}>
          Create an account to contineu!
        </AppText.small>
        <AppText.small>Full Name</AppText.small>
        <CusttomInput
          placeholder="Enter your Full name"
          onChangeText={setName}
          value={name}
          keyboardType="text"
        />
        <AppText.small>Email</AppText.small>
        <CusttomInput
          placeholder="Enter your Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
        />
        <AppText.small>Phone Number</AppText.small>
        <CusttomInput
          placeholder="Enter your Phone Number"
          onChangeText={setPhoneNumber}
          value={phoneNumber}
          keyboardType="numeric"
        />
        <AppText.small>Password</AppText.small>
        <CusttomInput
          placeholder="Enter your Password"
          onChangeText={setPassword}
          value={password}
          secureTextEntry={!showPassword}
        />
        <AppText.small>Confirm Password</AppText.small>
        <CusttomInput
          placeholder="Confirm your Password"
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          secureTextEntry={!showConfirmPassword}
        />

        {error ? (
          <AppText.small style={{ color: "red", marginTop: 10 }}>{error}</AppText.small>
        ) : null}
        <CusttomButton title="Sign Up" onPress={handleSignUp} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 5,
            marginTop: SPACING.regular,
          }}
        >
          <AppText.body>Already have an account?</AppText.body>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <AppText.medium style={{ fontWeight: "bold" }}>Login</AppText.medium>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  googleBtn: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    height: 48,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
});
