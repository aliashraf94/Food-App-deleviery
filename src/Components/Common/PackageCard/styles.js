import { StyleSheet } from "react-native";
import colors from "../../../Assets/Colors/Colors";
import { hp, wp } from "../../../Utills/CommonMethods/CommonMethods";
const styles = StyleSheet.create({
  container: {
    width: wp(90),
    height: hp(40),
    borderRadius: hp(2),
    borderWidth: 2,
    borderColor: colors.primaryColor,
    alignSelf: "center",
    marginTop: hp(1),
  },
  headingcontainer: {
    flex: 0.2,
    justifyContent: "center",
  },
  price: {
    fontSize: hp(2.5),
    color: colors.primaryColor,
    fontWeight: "600",
  },
  year: {
    fontSize: hp(1.8),
    alignSelf: "flex-end",
    color: colors.primaryColor,
  },
  subheading1: {
    alignSelf: "center",
    fontSize: hp(1.3),
    fontWeight: "600",
  },
  descriptioncontainer: {
    flex: 0.6,
    width: wp(80),
    justifyContent: "space-evenly",
    alignSelf: "center",
  },
  textcontainer: {
    width: wp(70),
    flexDirection: "row",
  },
  heading: {
    alignSelf: "center",
    fontSize: hp(1.5),
    fontWeight: "700",
    width: wp(70),
  },
  subheading: {
    alignSelf: "center",
    left: wp(2.5),
    fontSize: hp(1.5),
    width: wp(70),
    fontWeight: "300",
  },
  buttoncontainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
