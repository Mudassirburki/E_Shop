import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import CusttomInput from "../../components/input/CusttomInput";
import CusttomButton from "../../components/CusttomButton";
import AppText from "../../components/AppText";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const[error,setError]=useState("");
  const {login} =useContext(AuthContext)

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
    } catch (error) {
      Alert.alert("Error Message", error.message);
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
          marginTop:100,marginBottom:100,
        }}
        source={require("../../../assets/logo.png")}
      />
      <AppText.h1 style={{ alignSelf: "flex-start" }}>
        Sign in to your {"\n"} Account
      </AppText.h1>
      <CusttomInput
        placeholder="Enter your Email"
        onChangeText={(text)=>{setEmail(text)
          setError("")
        }}
        value={email}
        keyboardType="email-address"
      />
      <CusttomInput
        placeholder="Enter your Password"
        onChangeText={(text)=>{setPassword(text)
          setError("")
        }}
        value={password}
        secureTextEntry
      />
       {error ? (
  <Text style={{ color: "red", marginTop: 10 }}>{error}</Text>) : null}
      <AppText.medium style={{alignSelf:"flex-end",}}>Forgot password?</AppText.medium>

      <CusttomButton title="Login" onPress={handleLogin} />
      <AppText.small style={{ alignSelf: "center" }}>
        or login in with
      </AppText.small>
      <TouchableOpacity
      style={styles.googleBtn}
      >
        <Image style={{height:30,width:30}} source={require("../../../assets/googleIcon.png")}/>
        <AppText.body>Continue with Google</AppText.body>
      </TouchableOpacity>
       <TouchableOpacity
      style={styles.googleBtn}
      >
        <Image style={{height:30,width:30}} source={require("../../../assets/snapchat_logo.png")}/>
        <AppText.body>Continue with SnapChat</AppText.body>
      </TouchableOpacity>
      <View style={{flexDirection:"row",justifyContent:"center",gap:5,marginTop:150}}>
        <AppText.body>Don't have an account?</AppText.body>
        <TouchableOpacity
        onPress={()=>navigation.navigate("SignUp")}
        >
          <AppText.medium>SignUp</AppText.medium>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  googleBtn:{
    flexDirection:"row",
    backgroundColor:"#FFFFFF",
    height:48,
    borderRadius:10,
    marginTop:20,
    justifyContent:"center",
    alignItems:"center",
    gap:20
    

  }
});
