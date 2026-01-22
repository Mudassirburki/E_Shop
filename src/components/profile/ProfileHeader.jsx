import { StyleSheet, View } from "react-native";
import Svg, { Path } from "react-native-svg";

const ProfileHeader = () => {
  return (
    <View style={styles.headerContainer}>
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
    </View>
  );
};
export default ProfileHeader;

const styles = StyleSheet.create({
  headerContainer: {
    height: 220,
    backgroundColor: "transparent",
  },
  header: {
    height: 220,
    backgroundColor: "#FFC7AA",
  },
});
