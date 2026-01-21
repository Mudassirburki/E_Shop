import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import ListRow from "./common/ListRow";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ProfileSettingsCard = ({ user, onEdit }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <ListRow
      left={<Image source={user.avatar} style={styles.avatar} />}
      center={
        <View style={styles.middle}>
          <AppText.body style={styles.name}>{user.name}</AppText.body>
          <AppText.small numberOfLines={1} style={[styles.email, { color: colors.secondary }]}>
            {user.email}
          </AppText.small>
        </View>
      }
      right={
        <View style={styles.right}>
          <TouchableOpacity onPress={onEdit}>
            <AppText.body style={{ color: "#E97639" }}>Edit</AppText.body>
          </TouchableOpacity>
        </View>
      }
      containerStyle={[styles.container, { borderColor: colors.border }]}
    />
  );
};


export default ProfileSettingsCard;
const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
    borderRadius: 12
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  name: {
    fontWeight: "700",
    fontSize: 18,
  },
  email: {
    color: "#777",
    marginTop: 2,
  },

  right: {
    alignItems: "flex-end",
  },
  middle: {
    marginLeft: 4,
  },
});
