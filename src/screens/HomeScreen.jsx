import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState, useContext } from "react";
import CustomDropdown from "../components/CusttomDropdown";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { SearchBar } from "react-native-screens";
import AppText from "../components/AppText";
import { Image } from "expo-image";
import ProductCard from "../components/ProductCard";
import { ArrowUpDown ,ChevronDown,
  SlidersHorizontal,} from "lucide-react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemeContext } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";
import {
  LOCATIONS,
  CATEGORIES,
  IMAGE_CATEGORIES,
  PRODUCT_DATA,
} from "../data/dummyData";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("");
  const [isActive, setIsActive] = useState(null);
  const navigation = useNavigation();
  const { colors } = useContext(ThemeContext);
  const { t } = useTranslation();

  const onFilterPress =()=>{
    navigation.navigate('FilterScreen')
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.background }]}
    >
      {/* header */}
      <View style={styles.header}>
        <View style={{ flex: 1, marginRight: 10 }}>
          <CustomDropdown
            data={LOCATIONS}
            placeholder="Select Location"
            onSelect={(item) => setLocation(item)}
          />
        </View>
        <Pressable onPress={() => navigation.navigate("NotificationScreen")}>
          <Ionicons
            style={{ marginTop: 10 }}
            name="notifications-outline"
            size={25}
            color={colors.foreground}
          />
        </Pressable>
      </View>

      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* searchBar */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
            marginBottom: 10,
          }}
        >
          <View style={[styles.searchBar, { backgroundColor: colors.card }]}>
            <Ionicons name="search" size={20} color={colors.foreground} />
            <TextInput
              placeholder={t("searchPlaceholder")}
              placeholderTextColor={colors.secondary}
              value={search}
              onChangeText={setSearch}
              style={{
                flex: 1,
                borderRadius: 10,
                marginLeft: 10,
                color: colors.foreground,
              }}
            />
          </View>
          <Pressable onPress={onFilterPress}>
          <SlidersHorizontal size={24} color={colors.foreground} />
          </Pressable>
        </View>

        <View style={styles.topCategoriesView}>
          <AppText.body style={{ color: colors.foreground }}>
            {t("topCategories")}
          </AppText.body>
          <Ionicons name="arrow-forward" size={23} color={colors.foreground} />
        </View>

        <FlatList
          data={CATEGORIES}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          style={{ height: 12 }}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          renderItem={({ item }) => {
            const active = isActive === item.id;

            return (
              <Pressable
                onPress={() => setIsActive(item.id)}
                style={[
                  styles.categoriesRoot,
                  { backgroundColor: active ? "#F06A25" : colors.card },
                ]}
              >
                <Ionicons
                  name={item.icon}
                  size={22}
                  color={active ? "#FFFFFF" : colors.foreground}
                />
              </Pressable>
            );
          }}
        />

        <FlatList
          data={IMAGE_CATEGORIES}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          
          renderItem={({ item }) => (
            <Image source={item.image} style={styles.image} />
          )}
        />

        <View style={styles.hotDeals}>
          <AppText.body
            style={{ fontWeight: "bold", color: colors.foreground }}
          >
            {t("hotDeals")}
          </AppText.body>
          <View style={{ flexDirection: "row", gap: 5 }}>
            <ArrowUpDown size={20} color={colors.foreground} />
            <AppText.body style={{ color: colors.foreground }}>
              {t("sortBy")}
            </AppText.body>
            <ChevronDown size={20} color={"#F06A25"} />
          </View>
        </View>

        <FlatList
          data={PRODUCT_DATA}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                console.log("Clicked:", item.title);
                navigation.navigate("ProductDetails", {
                  product: item,
                });
              }}
            >
              <ProductCard item={item} />
            </Pressable>
          )}
          contentContainerStyle={{ padding: 5 }}
          scrollEnabled={false}
        />

        {/* <FlatList
          data={PRODUCT_DATA}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductCard item={item} />}
          contentContainerStyle={{ padding: 5 }}
          scrollEnabled={false}
        /> */}
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
    paddingHorizontal: 10,
    paddingBottom: 10,
    // paddingTop: 10, // Removed top padding to reduce space
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
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 45,
    marginRight: 10,
    // marginHorizontal: 20, // Removed to allow flex: 1 to work with parent padding
    // marginBottom: 10, // Moved to parent container
  },
  categoriesRoot: {
    width: wp("12%"),
    height: wp("12%"), // Making it square relative to width usually looks better, or fixed aspect ratio
    borderRadius: 10,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  image: {
    width: wp("90%"),
    height: hp("22%"),
    borderRadius: 10,
    marginRight: 10,
    marginLeft: 10, // Added margin left to balance if it's the first item, though FlatList contentContainerStyle is better
  },
  topCategoriesView: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});
