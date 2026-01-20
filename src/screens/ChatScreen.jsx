import { View, FlatList, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppHeader from "../components/Header/AppHeader";
import ChatCard from "../components/ChatCard";
import { CHAT_DATA } from "../data/dummyData";

const ChatScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      
      <AppHeader
        title="Chats"
      />      
        <FlatList
          data={CHAT_DATA}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ChatCard item={item} />}
          contentContainerStyle={{ padding: 10 }}
        />
    </View>
  );
};

export default ChatScreen;
