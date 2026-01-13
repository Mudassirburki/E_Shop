import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import CustomDropdown from "../components/CusttomDropdown";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { SearchBar } from "react-native-screens";
import AppText from "../components/AppText";
import { Image } from "expo-image";
import ProductCard from "../components/ProductCard";
import { ArrowUpDown } from "lucide-react-native";
import { ChevronDown } from "lucide-react-native/icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

const locations = ["Peshawar", "Islamabad", "Karachi", "Lahore"];

const HomeScreen = () => {
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");
  const [isActive, setIsActive] = useState(null)

  const categories = [
    { id: 1, icon: "shirt-outline" },
    { id: 2, icon: "laptop-outline" },
    { id: 3, icon: "ticket" },
    { id: 4, icon: "laptop-outline" },
    { id: 5, icon: "shirt-outline" },
    { id: 6, icon: "ticket" },
    { id: 7, icon: "laptop-outline" },
    { id: 8, icon: "shirt-outline" },
  ];

  const imageCategories = [
    { id: 1, image: require("../../assets/homeImage.png") },
    { id: 2, image: require("../../assets/homeImage.png") },
    { id: 3, image: require("../../assets/homeImage.png") },
  ];

  const productCard = [
    {
      id: "1",
      title: "Navy Mixed Stripe Trainers: Sizes 9-12 - 99p C&C",
      sizes: "9-12",
      description:
        "Step up your  casual style  with the Men's  Navy Mixed Stripe Trainers. Combining comfort with eye-catching ",
      price: "$34.00",
      image: require("../../assets/cardImage.png"),
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <View style={{ flex: 1, marginRight: 10 }}>
          <CustomDropdown
            data={locations}
            placeholder="Select Location"
            onSelect={(item) => setLocation(item)}
          />
        </View>

        <Ionicons
          style={{ marginTop: 10 }}
          name="notifications-outline"
          size={25}
          color={"black"}
        />
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }} showsVerticalScrollIndicator={false}>
        {/* searchBar */}
        <View style={styles.searchBar}>
          <Ionicons name="search" size={20} color={"black"} />
          <TextInput
            placeholder="Search here..."
            value={search}
            onChangeText={setSearch}
            style={{
              flex: 1,
              borderRadius: 10,
              marginLeft: 10,
            }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <AppText.body>Top Categories</AppText.body>
          <Ionicons name="arrow-forward" size={23} color={"#000"} />
        </View>

        <FlatList
          data={categories}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          renderItem={({ item }) => {
            const active = isActive === item.id;

            return (
              <Pressable onPress={() => setIsActive(item.id)}>
                <View
                  style={[
                    styles.categoriesRoot,
                    { backgroundColor: active ? "#F06A25" : "#FFFFFF" },
                  ]}
                >
                  <Ionicons
                    name={item.icon}
                    size={22}
                    color={active ? "#FFFFFF" : "#000000"}
                  />
                </View>
              </Pressable>
            );
          }}
        />


        <FlatList
          data={imageCategories}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 25 }}
          renderItem={({ item }) => (
            <Image source={item.image} style={styles.image} />
          )}
        />

        <View style={styles.hotDeals}>
          <AppText.body style={{ fontWeight: "bold" }}>Hot Deals</AppText.body>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <ArrowUpDown size={20} color={"black"} />
            <AppText.body>Sort by: All</AppText.body>
            <ChevronDown size={20} color={"#F06A25"} />
          </View>
        </View>

        <FlatList
          data={productCard}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductCard item={item} />}
          contentContainerStyle={{ padding: 5 }}
          scrollEnabled={false}
        />
        <FlatList
          data={productCard}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductCard item={item} />}
          contentContainerStyle={{ padding: 5 }}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure SafeAreaView takes up full space
    // padding: 20, // Removed top padding as SafeAreaView handles it, can keep horizontal or vertical if needed, but 'header' has padding
    backgroundColor: "#f9f9f9", // Good practice to have a background color for safe area
  },
  hotDeals: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",

  },
  header: {
    paddingHorizontal: 20, // Moved padding here
    paddingVertical: 10,
    // marginTop: 20, // REMOVED: SafeAreaView handles this
    justifyContent: "space-between",
    flexDirection: "row",

  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 45,
    marginHorizontal: 20, // Added margin horizontal to center it properly with other content
    marginBottom: 10,
  },
  categoriesRoot: {
    width: wp("15%"),
    height: wp("15%"), // Making it square relative to width usually looks better, or fixed aspect ratio
    borderRadius: 10,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    marginBottom: 10,
  },
  image: {
    width: wp("90%"),
    height: hp("22%"),
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10, // Added margin left to balance if it's the first item, though FlatList contentContainerStyle is better
  },
});
