import { StyleSheet } from "react-native";
import colors from "../../../Assets/Colors/Colors";
import { hp, wp } from "../../../Utills/CommonMethods/CommonMethods";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  stepContainer: {
    flexDirection: "row",
    marginHorizontal: wp(10),
    width: wp(80),
  },
  circleContainer: {
    width: wp(6),
    height: wp(6),
    borderColor: colors.circle,
    borderRadius: 50,
    borderWidth: 2,
  },
  lableText: {
    left: wp(2),
    color: colors.BLACK,
  },
  lineView: {
    flex: 1,
    width: 1.5,
    backgroundColor: colors.BLACK,
    minHeight: hp(3),
    marginLeft: wp(2.7),
  },
  textContainer: {
    width: wp(80),
    height: "100%",
    minWidth: wp(80),
  },
});

export default styles;
