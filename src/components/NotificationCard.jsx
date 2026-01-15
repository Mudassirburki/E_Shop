import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FONT, SPACING } from "./responsive/AppResponsive";

const NotificationCard = ({ item, onPress,title,description,image }) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={styles.cardContainer}>
      
      {/* Left side: Circle Image */}
      <View style={styles.imageWrapper}>
        <Image
          source={item.avatar} // product image
          style={styles.image}
        />
      </View>

      {/* Right side: Text Content */}
      <View style={styles.content}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
        <AppText.body style={styles.title} numberOfLines={1}>
          {item.title}
        </AppText.body>
        <AppText.small style={styles.time}>{item.time}</AppText.small>
        </View>

        <AppText.small style={styles.description} numberOfLines={2}>
          {item.description}
        </AppText.small>

      </View>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    width: wp("90%"),
    padding: SPACING.small,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginVertical: 6,
    marginHorizontal: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    alignItems: "center",
  },
  imageWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25, // 🔹 makes image circle
    overflow: "hidden",
    marginRight: SPACING.small,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
   
   
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  },
  content: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: FONT.regular,
    marginBottom: 2,
    color: "#E97639",
  },
  description: {
    fontSize: FONT.small,
    color: "#555",
    marginBottom: 2,
  },
  time: {
    fontSize: FONT.tiny,
    color: "#999",
  },
});
