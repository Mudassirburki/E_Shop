import { Dimensions } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

// Screen dimensions
export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;

// Font sizes
export const FONT = {
  small: wp("3.5%"),
  regular: wp("4%"),
  medium: wp("4.5%"),
  large: wp("5.5%"),
  xlarge: wp("6.5%"),
};

// Spacing
export const SPACING = {
  small: hp("1%"),
  regular: hp("2%"),
  medium: hp("3%"),
  large: hp("4%"),
};

// Input / Button size
export const SIZE = {
  buttonHeight: hp("6%"),
  inputHeight: hp("6%"),
  iconSize: wp("5%"),
};
