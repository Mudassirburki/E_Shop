import { StyleSheet, View } from "react-native";
import AppText from "../AppText";

const UserInfo = () => {
    return (
        <View style={styles.container}>
            <AppText.body style={styles.name}>Mudassir Burki</AppText.body>

        </View>

    )
}
export default UserInfo;
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
    },
    username: {
        fontSize: 16,
        color: "gray",
    }
})