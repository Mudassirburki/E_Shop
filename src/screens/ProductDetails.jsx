import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../components/Header/AppHeader";
import Carousel from "react-native-reanimated-carousel";
import { ProductImages } from "../data/dummyData";
import { Image } from "expo-image";

// const { width } = Dimensions.get("window");

const ProductDetails = ({ navigation }) => {
    const [activeIndex,setActiveIndex]= useState(0);
    
  return (
    <View style={styles.container}>
      {/* Header */}
      <AppHeader
        title="Product Details"
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
          data={ProductImages}
          scrollAnimationDuration={5000}
          onSnapToItem={(index) => setActiveIndex(index)}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
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
          {ProductImages.map((_, index) => (
            <View
              key={index}
              style={[
              styles.dot,
              activeIndex === index && styles.activeDot,
            ]}
            />
          ))}
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
    position: 'absolute',
    bottom: 10, // 🔹 bottom of image
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc', // inactive color
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#E97639', // active color
    
  },
});
