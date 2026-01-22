import { StyleSheet, View } from "react-native";
import AppText from "../AppText";
import { USER_STATS } from "../../data/dummyData";

const StatsRow = () => {
    return (
        <View style={styles.row}>
            {USER_STATS.map((stat) => (
                <StatItem key={stat.id} label={stat.label} value={stat.value} />
            ))}
        </View>
    );
}

const StatItem = ({ label, value }) => {
    return (
        <View style={styles.statItem}>
            <AppText.body style={styles.statValue}>{value}</AppText.body>
            <AppText.body style={styles.statLabel}>{label}</AppText.body>
        </View>
    )
}
export default StatsRow;
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "center",
        width: "100%",
        marginTop: 20,
        gap: 37
    },
    statItem: {
        alignItems: "center",
    },
    statValue: {
        fontSize: 20,
        fontWeight: "bold",
    },
    statLabel: {
        fontSize: 16,
        color: "gray",
    }
})