import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // App start pe restore session
  useEffect(() => {
    const restoreSession = async () => {
      try {
        console.log("AuthContext: Restoring session...");
        const token = await AsyncStorage.getItem("userToken");
        if (token) {
          console.log("AuthContext: Found token:", token);
          setUserToken(token);
        } else {
          console.log("AuthContext: No token found");
        }
      } catch (error) {
        console.error("AuthContext: Error restoring session:", error);
      } finally {
        setLoading(false);
        console.log("AuthContext: Loading finished");
      }
    };
    restoreSession();
  }, []);

  // Signup function
  const SignUP = async (email, password) => {
    email = email.trim().toLowerCase();

    const storedUsers = await AsyncStorage.getItem("users");
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    const already = users.find(u => u.email === email);
    if (already) throw new Error("User already exists");

    const newUser = {
      id: Date.now().toString(),
      email,
      password,
    };

    users.push(newUser);
    await AsyncStorage.setItem("users", JSON.stringify(users));

    return newUser; // return new user
  };

  // Login function
  const login = async (email, password) => {
    email = email.trim().toLowerCase();

    const storedUsers = await AsyncStorage.getItem("users");
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    const user = users.find(u => u.email === email);
    if (!user) throw new Error("Account not found");
    if (user.password !== password) throw new Error("Incorrect password");

    await AsyncStorage.setItem("userToken", user.id);
    setUserToken(user.id);

    return user;
  };

  // Logout function
  const logout = async () => {
    await AsyncStorage.removeItem("userToken");
    setUserToken(null);
  };

  return (
    <AuthContext.Provider value={{ SignUP, login, logout, userToken, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
