import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, Switch, TouchableOpacity } from "react-native"
import AppText from "./AppText"

const SettingsCard=({
    title,
    icon,
    value,
    toggle,
    onToggle,
    onPress
})=>{
return(
    <TouchableOpacity
    style={styles.container}
    onPress={onPress}
    activeOpacity={0.7}
    disabled={!onPress}
    >
        {icon && <Ionicons name={icon} size={24} color={"#EB3030"} style={styles.icon}/>}
        <AppText.body style={styles.title}>{title}</AppText.body>
        {toggle !== undefined &&(
            <Switch
            value={value}
            onValueChange={onToggle}
            trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={value ? '#81b0ff' : '#f4f3f4'}
            />
        )}

    </TouchableOpacity>

)
}

export default SettingsCard;

const styles = StyleSheet.create({
 container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    marginRight: 12,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
})