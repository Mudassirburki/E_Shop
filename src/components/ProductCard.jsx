import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AppText from "./AppText";
import { Ionicons } from "@expo/vector-icons";
import { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FONT, SPACING, SIZE } from "./responsive/AppResponsive";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const ProductCard = ({ item }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <View style={[styles.cardContainer, { backgroundColor: colors.card }]}>
      {/* Top Section */}
      <TouchableOpacity style={styles.topSection} activeOpacity={0.8}>
        {/* Left Image */}
        <View style={styles.imageWrapper}>
          <Image source={item.images?.[2]} style={styles.image} resizeMode="stretch" />
          {/* Example Overlay Badge */}
          {/* <View style={styles.badge}>
             <Ionicons name="bag-handle" size={12} color="#fff" />
          </View> */}
        </View>

        {/* Right Content */}
        <View style={styles.content}>
          <AppText.body style={styles.title} numberOfLines={2}>
            {item.title}
          </AppText.body>



          <View style={styles.ratingRow}>
            <AppText.small style={styles.ratingNumber}>4.8</AppText.small>
            <View style={styles.stars}>
              {[1, 2, 3, 4].map((_, i) => (
                <Ionicons key={i} name="star" size={12} color="#F7B305" />
              ))}
              <Ionicons name="star-half-outline" size={12} color="#ccc" />
            </View>
            <AppText.small style={styles.timeText}>2 Days Ago</AppText.small>
          </View>

          <AppText.small numberOfLines={2} style={[styles.description, { color: colors.secondary }]}>
            {item.description}
          </AppText.small>

          <View style={styles.priceRow}>
            <View>
              <AppText.h3 style={[styles.price, { color: colors.foreground }]}>${item.price || "34.00"}</AppText.h3>
              <View style={styles.discountRow}>
                <AppText.small style={styles.discountPercent}>{item.discount}</AppText.small>
                <AppText.small style={[styles.originalPrice, { color: colors.secondary }]}>{item.originalPrice}</AppText.small>
              </View>
            </View>

            <TouchableOpacity style={styles.couponBtn}>
              <AppText.small style={styles.couponText}>H62J190</AppText.small>
              <Ionicons name="copy-outline" size={14} color="#fff" style={{ marginLeft: 4 }} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>

      {/* Divider */}
      <View style={[styles.divider, { backgroundColor: colors.border }]} />

      {/* Footer Section */}
      <View style={styles.footer}>
        <View style={styles.userInfo}>
          <View style={[styles.avatarPlaceholder, { backgroundColor: colors.border }]}>
            <Image
              source={require("../../assets/burki.jpg")}
              style={styles.avatarImage}
            />
          </View>
          <AppText.body style={[styles.username, { color: colors.foreground }]}>Mudassir Burki</AppText.body>
        </View>

        <View style={styles.socialActions}>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="bookmark-outline" size={20} color="#F06A25" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="share-social-outline" size={20} color="#F06A25" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="chatbubble-outline" size={20} color="#F06A25" />
            <AppText.small style={{ marginLeft: 4, color: colors.secondary }}>7</AppText.small>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 16,

    marginVertical: SPACING.small,
    elevation: 3, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: "hidden",
  },
  topSection: {
    flexDirection: "row",
    padding: SPACING.small,
  },
  imageWrapper: {
    width: wp("30%"),
    height: wp("35%"),
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
    marginRight: SPACING.small,
    position: 'relative',
  },
  image: {
    width: "100%",
    height: "100%",
  },
  badge: {
    position: 'absolute',
    top: SPACING.small,
    left: SPACING.small,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 4,
    borderRadius: 4,
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: FONT.regular,
    marginBottom: 2,
  },
  variantText: {
    fontSize: FONT.small,
    color: '#333',
    marginBottom: 4,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  ratingNumber: {
    fontWeight: "bold",
    fontSize: FONT.small,
    marginRight: 4,
  },
  stars: {
    flexDirection: "row",
    gap: 1,
    marginRight: 'auto',
  },
  timeText: {
    fontSize: 10,
    color: "#999",
  },
  description: {
    fontSize: 11,
    color: "#777",
    marginBottom: 8,
    lineHeight: 16,
  },
  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    fontWeight: "bold",
    fontSize: FONT.medium,
  },
  discountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  discountPercent: {
    fontSize: 10,
    color: 'red',
  },
  originalPrice: {
    fontSize: 10,
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  couponBtn: {
    flexDirection: 'row',
    backgroundColor: '#F06A25',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: 'center',
  },
  couponText: {
    color: '#fff',
    fontWeight: "600",
    fontSize: FONT.small,
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginHorizontal: 12,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: SPACING.small,
    paddingTop: 8,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  avatarPlaceholder: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#eee',
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  username: {
    fontSize: FONT.small,
    fontWeight: "bold",
  },
  socialActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  }
});
