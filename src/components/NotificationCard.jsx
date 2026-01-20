import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import AppText from "./AppText";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { FONT, SPACING } from "./responsive/AppResponsive";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import ListRow from "./common/ListRow";

const NotificationCard = ({ item, onPress, variant = "notification" }) => {
  const isSettings = variant === "settings" || variant === "personalized";
  const isAdd = variant === "add";

  const renderLeft = () => {
    if (isAdd || isSettings) return null;
    return (
      <View style={styles.imageWrapper}>
        <Image source={item?.avatar} style={styles.image} />
      </View>
    );
  };

  const renderCenter = () => {
    if (isAdd) {
      return (
        <AppText.body style={styles.settingsTitle}>
          {item?.title || "Add New Keyword"}
        </AppText.body>
      );
    }
    if (isSettings) {
      return (
        <AppText.body style={styles.settingsTitle}>
          {item.title}
        </AppText.body>
      );
    }
    return (
      <View style={styles.content}>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <AppText.body style={styles.title} numberOfLines={1}>
            {item?.title}
          </AppText.body>
          <AppText.small style={styles.time}>{item?.time}</AppText.small>
        </View>
        <AppText.small style={styles.description} numberOfLines={2}>
          {item?.description}
        </AppText.small>
      </View>
    );
  };

  const renderRight = () => {
    if (isAdd) return <Icon name="plus" size={24} color="#1A237E" />;
    if (isSettings) {
      return (
        <View style={styles.iconWrapper}>
          {item.icons ? (
            item.icons.map((iconName, index) => (
              <Icon
                key={index}
                name={iconName}
                size={20}
                color="#AAA"
                style={{ marginLeft: 8 }}
              />
            ))
          ) : (
            item.icon && <Icon name={item.icon} size={24} color="#AAA" />
          )}
        </View>
      );
    }
    return null;
  };

  return (
    <ListRow
      onPress={onPress}
      left={renderLeft()}
      center={renderCenter()}
      right={renderRight()}
      containerStyle={[
        styles.cardContainer,
        (isSettings || isAdd) && styles.settingsContainer,
      ]}
    />
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
    borderRadius: 25,
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
  settingsContainer: {
    justifyContent: "space-between",
    paddingVertical: SPACING.medium,
  },
  settingsTitle: {
    fontSize: FONT.regular,
    color: "#333",
    fontWeight: "500",
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
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
