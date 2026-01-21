import { View, Image, StyleSheet } from "react-native";
import AppText from "./AppText";
import ListRow from "./common/ListRow";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ChatCard = ({ item }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <ListRow
      left={<Image source={item.avatar} style={[styles.avatar, { backgroundColor: colors.border }]} />}
      center={
        <View style={styles.middle}>
          <AppText.body style={styles.name}>{item.name}</AppText.body>
          <AppText.small numberOfLines={1} style={styles.message}>
            {item.lastMessage}
          </AppText.small>
        </View>
      }
      right={
        <View style={styles.right}>
          <AppText.small style={styles.time}>{item.time}</AppText.small>

          {item.unreadCount > 0 && (
            <View style={styles.badge}>
              <AppText.small style={styles.badgeText}>
                {item.unreadCount}
              </AppText.small>
            </View>
          )}
        </View>
      }
      containerStyle={[styles.container, { borderColor: colors.border }]}
    />
  );
};

export default ChatCard;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  middle: {
    flex: 1,            // ⭐ MOST IMPORTANT
    marginLeft: 12,
  },

  name: {
    fontWeight: "600",
  },

  message: {
    color: "#777",
    marginTop: 2,
  },

  right: {
    alignItems: "flex-end",
    marginLeft: 10,
  },

  time: {
    color: "#999",
    fontSize: 12,
  },

  badge: {
    marginTop: 6,
    backgroundColor: "#2E55BACC",
    minWidth: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 6,
  },

  badgeText: {
    color: "#fff",
    fontSize: 11,
  },
});
