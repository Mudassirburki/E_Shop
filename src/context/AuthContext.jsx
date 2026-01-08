import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider =({children}) =>{
    const [userToken , setUserToken] = useState(null);
    const [loading , setLoading] = useState(true);

    useEffect(()=>{
        const restoreSession =async()=>{
            const token = await AsyncStorage.getItem("userToken");
            if (token) setUserToken(token);
            setLoading(false);
        };
        restoreSession();
    },[]);

    const SignUP =async(email , password)=>{
        const storedUsers = await AsyncStorage.getItem("users");
        const user = storedUsers? JSON.parse(storedUsers):[];

         const already = user.find(u => u.email === email);
    if (already) throw new Error("User already exists");

    user.push({
      id: Date.now().toString(),
      email,
      password,
    });

    await AsyncStorage.setItem("users", JSON.stringify(user));
  };

  const login = async (email, password) => {
  const storedUser = await AsyncStorage.getItem("users");
  const users = storedUser ? JSON.parse(storedUser) : [];

  const user = users.find(u => u.email === email);
  if (!user) {
    throw new Error("Account not found"); // email exist nahi karta
  } 
  if (user.password !== password) {
    throw new Error("Incorrect password"); // password galat
  }

  await AsyncStorage.setItem("userToken", user.id);
  setUserToken(user.id);
};

  const logout =async()=>{
    await AsyncStorage.removeItem("userToken");
    setUserToken(null);
  }
   return (
    <AuthContext.Provider
      value={{ SignUP, login, logout, userToken, loading }}
    >
      {children}
    </AuthContext.Provider>
  );

}