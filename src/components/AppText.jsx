import { Text as RNText, StyleSheet } from "react-native";
import { FONT } from "./responsive/AppResponsive";
import { useTheme } from "../context/ThemeContext";

const BaseText = ({ children, style, ...props }) => {
  return (
    <RNText allowFontScaling={false} style={style} {...props}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: FONT.xlarge,
    fontFamily: "Manrope-Bold",
  },
  h2: {
    fontSize: FONT.large,
    fontFamily: "Manrope-Bold",
  },
  h3: {
    fontSize: FONT.medium,
    fontFamily: "Manrope-Medium",
  },
  body: {
    fontSize: FONT.regular,
    fontFamily: "Manrope-Regular",
    fontWeight: "bold",
  },
  small: {
    fontSize: FONT.small,
    fontFamily: "Manrope-Regular",
  },
  medium: {
    fontSize: FONT.small,
    fontFamily: "Manrope-Medium",
    color: "#1642B2",
  },
});

const AppText = {
  h1: (props) => {
    const theme = useTheme();
    const colors = theme?.colors ?? {};
    return <BaseText {...props} style={[styles.h1, { color: colors.foreground }, props.style]} />;
  },
  h2: (props) => {
    const theme = useTheme();
    const colors = theme?.colors ?? {};
    return <BaseText {...props} style={[styles.h2, { color: colors.foreground }, props.style]} />;
  },
  h3: (props) => {
    const theme = useTheme();
    const colors = theme?.colors ?? {};
    return <BaseText {...props} style={[styles.h3, { color: colors.foreground }, props.style]} />;
  },
  body: (props) => {
    const theme = useTheme();
    const colors = theme?.colors ?? {};
    return <BaseText {...props} style={[styles.body, { color: colors.foreground }, props.style]} />;
  },
  small: (props) => {
    const theme = useTheme();
    const colors = theme?.colors ?? {};
    return <BaseText {...props} style={[styles.small, { color: colors.secondary }, props.style]} />;
  },
  medium: (props) => {
    return <BaseText {...props} style={[styles.medium, props.style]} />;
  },
};

export default AppText;
