import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import AppText from "../AppText";
import Colors from "../../theme/Colors";

const ProfileHeader = () => {
  return (
    <View style={styles.headerContainer}>
      
      {/* SVG Background */}
      <Svg
        height="280"
        width="100%"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <Path
          fill="#FFC7AA"
          d="
            M0,0
            L1440,0
            L1440,260
            C 1180,260  980,110  720,110
            C 460,110   260,260   0,260
            Z
          "
        />
      </Svg>

      {/* Text Overlay */}
      <View style={styles.textContainer}>
        <AppText.body style={{color:Colors.foreground}}>My Profile</AppText.body>
      </View>

    </View>
  );
};

export default ProfileHeader;
const styles = StyleSheet.create({
  headerContainer: {
    height: 280,
    position: "relative",
  },

  textContainer: {
    position: "absolute",
    top: 50,     // 👈 yahan se upar/neeche control
    left: 20,    // 👈 left/right control
  },

 
});
