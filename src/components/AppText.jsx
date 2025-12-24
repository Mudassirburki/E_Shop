import { Text,StyleSheet } from "react-native"

const AppText=({children,style,type="body"})=>{
  return <Text style={[styles[type],style]}>{children}</Text>
}


const styles =StyleSheet.create({
  h1: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
  },
  h2: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
  },
  h3: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  body: {
    fontSize: 16,
    color: "#000",
  },
  small: {
    fontSize: 12,
    color: "#555",
  },
});

export default AppText;