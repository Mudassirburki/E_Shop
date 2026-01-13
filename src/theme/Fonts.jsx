export const FONT_FAMILY = {
  regular: "Manrope-Regular",
  medium: "Manrope-Medium",
  bold: "Manrope-Bold",
};


import { widthPercentageToDP as wp } from "react-native-responsive-screen";

export const FONT_SIZE = {
  small: wp("3.5%"),   // captions, helper text
  regular: wp("4%"),   // normal body text
  medium: wp("4.5%"),  // buttons
  large: wp("5.5%"),   // headings
  xlarge: wp("6.5%"),  // main titles
};
