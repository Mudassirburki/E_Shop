import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CusttomInput from '../../components/input/CusttomInput';

const SignUp = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] =useState("");

  const handleLogin=()=>{

  }
  return (
    <View>
      <CusttomInput
      placeholder={email}
      value={email}
      onChangeText={setEmail}
      keyboardType='email-address'
      
      />
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})