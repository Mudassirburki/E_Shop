import {
  FlatList,
  Pressable,
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

const locations = ["Peshawar", "Islamabad", "Karachi", "Lahore"];
const HomeScreen = () => {
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");
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
    <View style={styles.container}>
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
        <Ionicons name="arrow-forward-outline" size={23} color={"#000"} />
      </View>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
        renderItem={({ item }) => (
          <View style={styles.categoriesRoot}>
            <Ionicons
              style={{ alignSelf: "center" }}
              name={item.icon}
              size={22}
              color={"#04764E"}
            />
          </View>
        )}
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

      <FlatList
        data={productCard}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductCard item={item} />}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
  },
  header: {
    padding: 20,
    marginTop: 20,
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
  },
  categoriesRoot: {
    width: 60,
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
    marginBottom: 10,
  },
  image: {
    width: 380,
    height: 200,
    borderRadius: 10,
    marginRight: 10,
  },
});
