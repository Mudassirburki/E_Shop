import { Image } from "expo-image";
import { StyleSheet, View } from "react-native"

const Avatar = () => {
  return (
    <View style={styles.avatarWrapper}>
      <Image source={require("../../../assets/burki.jpg")} style={styles.avatar} />
    </View>
  )
}

export default Avatar;

const styles = StyleSheet.create({
  avatarWrapper: {
    position: "absolute",
    top: 110,
    alignSelf: "center",
    zIndex: 1,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#FFFFFF",
  },
});