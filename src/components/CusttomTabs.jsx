import { StyleSheet, TouchableOpacity, View } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import AppText from "./AppText";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CustomTabs({ state, descriptors, navigation }) {
  const insets = useSafeAreaInsets();
  const icons = {
    Home: "home",
    Chat: "chatbubbles-outline",
    Settings: "settings",
    Profile: "person",
  };
  return (
    <View
      style={[
        styles.container,
        { paddingBottom: insets.bottom + 10, height: 60 + insets.bottom },
      ]}
    >
      {state.routes.map((route, index) => {
        // Ensure isFocused is always boolean
        const isFocused = state.index === index;

        // descriptors[route.key].options.accessibilityState.selected
        const accessibilitySelected =
          descriptors[route.key].options.accessibilityState?.selected ?? false;

        return (
          <TouchableOpacity
            key={route.key}
            style={styles.tab}
            onPress={() => navigation.navigate(route.name)}
            activeOpacity={1} // boolean safe
            accessibilityState={{ selected: !!accessibilitySelected }} // cast to boolean
          >
            <Ionicons
              name={icons[route.name]}
              size={24}
              color={isFocused ? "#BB4100" : "#999"}
            />
            <AppText.small style={{ color: isFocused ? "#BB4100" : "#999" }}>
              {route.name}
            </AppText.small>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    backgroundColor: "#fff",
     position: 'absolute', // float at bottom
    left: 0,
    right: 0,
    bottom: 0,
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
