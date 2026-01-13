import { Text as RNText, StyleSheet } from "react-native";
import { FONT } from "./responsive/AppResponsive";

const BaseText = ({ children, style, ...props }) => {
  return (
    <RNText allowFontScaling={false} style={style} {...props}>{children}</RNText>
  )
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
  },
  small: {
    fontSize: FONT.small,
    color: "#555",
    fontFamily: "Manrope-Regular",
  },
  medium: {
    fontSize: FONT.small,
    color: "#1642B2",
    fontFamily: "Manrope-Medium",
  },
});

const AppText = {
  h1: (props) => <BaseText {...props} style={[styles.h1, props.style]} />,
  h2: (props) => <BaseText {...props} style={[styles.h2, props.style]} />,
  h3: (props) => <BaseText {...props} style={[styles.h3, props.style]} />,
  body: (props) => <BaseText {...props} style={[styles.body, props.style]} />,
  small: (props) => <BaseText {...props} style={[styles.small, props.style]} />,
  medium: (props) => <BaseText {...props} style={[styles.medium, props.style]} />
}

export default AppText;