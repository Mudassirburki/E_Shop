import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../components/Header/AppHeader";
import Carousel from "react-native-reanimated-carousel";
import { Image } from "expo-image";
import AppText from "../components/AppText";
import { FONT } from "../components/responsive/AppResponsive";
import { Ionicons } from "@expo/vector-icons";
import CusttomButton from "../components/CusttomButton";
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";

// const { width } = Dimensions.get("window");

const ProductDetails = ({ navigation, route }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { product } = route.params;
  const user = product?.user;
  const images = product.images;
  const { colors } = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Header */}
      <AppHeader
        title={t('productDetails')}
        leftIcon="arrow-left"
        rightIcon="menu"
        onLeftPress={() => navigation.goBack()}
        onRightPress={() => console.log("Cart pressed")}
      />

      <SafeAreaView style={{ flex: 1 }} edges={["bottom", "left", "right"]}>
        {/* Content */}
        {/* <ScrollView style={styles.contentContainer} contentContainerStyle={{ padding: 16 }}>

        </ScrollView> */}

        <Carousel
          loop
          width={406}
          height={250}
          autoPlay={false}
          data={images}
          scrollAnimationDuration={5000}
          onSnapToItem={(index) => setActiveIndex(index)}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white", // Images usually have white bg, or maybe colors.card if images are transparent
              }}
            >
              <Image
                source={item}
                style={{
                  width: 406,
                  height: 250,
                  borderRadius: 20,
                  padding: 10,
                }}
                contentMode="contain"
              />
            </View>
          )}
        />
        <View style={styles.doteContainer}>
          <View style={styles.dotContainer}>
            {images.map((_, index) => (
              <View
                key={index}
                style={[styles.dot, activeIndex === index && styles.activeDot]}
              />
            ))}
          </View>
        </View>
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
        <AppText.body numberOfLines={2} style={{ padding: 10, color: colors.foreground }}>
          {product.title}
        </AppText.body>
        <View style={{ flexDirection: "row" }}>
          <AppText.body style={[styles.price, { padding: 15, color: colors.foreground }]}>
            {product.price}
          </AppText.body>
          <AppText.body
            style={{
              padding: 15,
              textDecorationLine: "line-through",
              color: colors.secondary,
            }}
          >
            {product.originalPrice}
          </AppText.body>
          <AppText.body
            style={{
              padding: 15,
              color: "#E97639",
              justifyContent: "flex-end",
              fontWeight: "bold",
              marginLeft: "auto",
            }}
          >
            {product.discount} {t('off')}
          </AppText.body>
        </View>
        <View style={styles.userRow}>
          <Image source={user.avatar} style={styles.userImage} />
          <AppText.body style={[styles.userName, { color: colors.foreground }]}>{user.name}</AppText.body>
        </View>
        <AppText.h3 style={{ padding: 10, fontWeight: "bold", color: colors.foreground }}>{t('description')}</AppText.h3>
        <AppText.body style={[styles.description, { padding: 10, color: colors.secondary }]}>
          {product.description}
        </AppText.body>
        <CusttomButton title={t('getDeal')} style={{ width: "90%", alignSelf: "center" }} />
        <View style={[styles.divider, { backgroundColor: colors.border }]} />
        <View style={{ flexDirection: "row", padding: 15 }}>
          <Ionicons name="chatbubbles-outline" size={22} color={colors.foreground} style={{ marginTop: 3 }} />
          <AppText.body style={{ color: colors.foreground }}>12 {t('comments')}</AppText.body>
          <AppText.body style={{ marginLeft: "auto", color: colors.primary }}>{t('showAll')}</AppText.body>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  contentContainer: { flex: 1 }, // Important: take remaining space
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 8 },
  description: { fontSize: 16, color: "#555", marginBottom: 12 },
  price: { fontSize: 18, fontWeight: "600", color: "#000" },
  doteContainer: {
    height: 35,
    width: 406,
    marginTop: 220,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    backgroundColor: "#FFFFFF99",
  },
  dotContainer: {
    position: "absolute",
    bottom: 10, // 🔹 bottom of image
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc", // inactive color
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#E97639", // active color
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
    padding: 10,
  },
  ratingNumber: {
    fontWeight: "bold",
    fontSize: FONT.small,
    marginRight: 4,
  },
  stars: {
    flexDirection: "row",
    gap: 1,
    marginRight: "auto",
  },
  timeText: {
    fontSize: 10,
    color: "#999",
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 8,
  },

  userImage: {
    width: 28,
    height: 28,
    borderRadius: 14,
    marginRight: 8,
  },

  userName: {
    fontSize: 14,
    fontWeight: "600",
  },
  divider: {
    height: 1,
    backgroundColor: "gray",
    marginTop: 20
  },

});
