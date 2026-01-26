import { Pressable, StyleSheet } from "react-native"
import AppText from "../AppText"
import { ArrowUpDown } from "lucide-react-native"
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const FilterOptionCard=(
   { title,
    showIcon=true,
    onPress,}
)=>{
    const { colors } = useContext(ThemeContext);
    return(
        <Pressable onPress={onPress} style={styles.card}>
            <AppText.body style={styles.title}>{title}</AppText.body>
            {showIcon &&
            <ArrowUpDown size={24} color={colors.foreground}/>
            }
        </Pressable>
    )
}
export default FilterOptionCard;
 const styles = StyleSheet.create({
     card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 12,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
 })