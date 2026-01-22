import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, Switch, TouchableOpacity } from "react-native"
import AppText from "./AppText"
import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"

const SettingsCard = ({
  title,
  icon,
  value,
  toggle,
  onToggle,
  onPress
}) => {
  const { colors } = useContext(ThemeContext);
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: colors.card, shadowColor: colors.border }]}
      onPress={onPress}
      activeOpacity={0.7}
      disabled={!onPress}
    >
      {icon && <Ionicons name={icon} size={24} color={"#EB3030"} style={styles.icon} />}
      <AppText.body style={[styles.title, { color: colors.secondary }]}>{title}</AppText.body>
      {toggle !== undefined && (
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
    borderRadius: 12,
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