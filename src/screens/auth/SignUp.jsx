import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import CusttomInput from "../../components/input/CusttomInput";
import CusttomButton from "../../components/CusttomButton";
import AppText from "../../components/AppText";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";

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
    // 1. Sign up the user
    await SignUP(name, email, password);

    // 2. Automatically log in the user
    await login(email, password);

    // 3. Feedback
    Alert.alert("Success", "Account successfully created!");

    // 4. Navigate to Home screen
    navigation.replace("Home"); 
  } catch (error) {
    // Show error if email already exists
    Alert.alert("Error", error.message);
  }
};


  return (
    <View style={styles.container}>
      <Image
        style={{
          height: 100,
          width: 100,
          contentFit: "contain",
          alignSelf: "center",
          marginTop: 70,
          marginBottom: 70,
        }}
        source={require("../../../assets/logo.png")}
      />
      <AppText.h1 style={{ alignSelf: "flex-start" }}>Sign up</AppText.h1>
      <AppText.small style={{ marginBottom: 20 }}>
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
        <Text style={{ color: "red", marginTop: 10 }}>{error}</Text>
      ) : null}
      <CusttomButton title="Sign Up" onPress={handleSignUp} />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          gap: 5,
          marginTop: 20,
        }}
      >
        <AppText.body>Already have an account?</AppText.body>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <AppText.medium>Login</AppText.medium>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
