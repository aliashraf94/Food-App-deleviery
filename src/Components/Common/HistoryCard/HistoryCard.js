import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../../Assets/Colors/Colors";
import { hp, wp } from "../../../Utills/CommonMethods/CommonMethods";

const HistoryCard = ({ navigation }) => {
  return (
    <View style={styles.continer}>
      <View style={styles.maincontainer}>
        <View style={styles.datacontainer}>
          <Text
            style={{
              alignSelf: "center",
              color: colors.primaryColor,
              fontSize: hp(2),
            }}
          >
            May, 01, 2022 - 3:26 Pm
          </Text>
        </View>
        <View style={styles.detailcontainer}>
          <View style={{ height: hp(14), justifyContent: "space-evenly" }}>
            <Text style={styles.heading}>Pickup :</Text>
            <Text style={styles.subheading}>
              Arfa Tower Ferozepur Rd, Nishtar Town,
            </Text>
            <Text style={styles.heading}>Droop Off :</Text>
            <Text style={styles.subheading}>Muslim Town Ferozepur Rd,</Text>
          </View>
        </View>
        <View style={styles.timepricecontainer}>
          <View style={styles.timecontainer}>
            <Text
              style={{
                alignSelf: "center",
                fontWeight: "300",
                color: colors.BLACK,
              }}
            >
              Total Time
            </Text>
            <Text style={{ alignSelf: "center", color: colors.primaryColor }}>
              4 Min 38 Sec
            </Text>
          </View>
          <View style={styles.pricecontianer}>
            <Text
              style={{
                alignSelf: "center",
                fontWeight: "300",
                color: colors.BLACK,
              }}
            >
              Total Price
            </Text>
            <Text style={{ alignSelf: "center", color: colors.primaryColor }}>
              €50.00
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default HistoryCard;

const styles = StyleSheet.create({
  continer: {
    flex: 1,
  },
  maincontainer: {
    height: hp(28),
    width: wp(95),
    borderWidth: 1,
    borderRadius: wp(6),
    alignSelf: "center",
    marginTop: hp(1.5),
  },
  datacontainer: {
    // backgroundColor: "pink",
    // borderWidth: 1,
    height: hp(5),
    width: wp(94),
    borderTopLeftRadius: wp(6),
    borderTopRightRadius: wp(6),
    alignSelf: "center",
    justifyContent: "center",
  },
  detailcontainer: {
    //  backgroundColor: "red",
    height: hp(16),
    width: wp(84),
    alignSelf: "center",
    //  justifyContent: "space-evenly",
  },
  heading: {
    fontSize: hp(2),
    fontWeight: "500",
    color: colors.BLACK,
  },
  subheading: {
    fontWeight: "300",
    color: colors.BLACK,
  },
  timepricecontainer: {
    // backgroundColor: "pink",
    height: hp(7),
    width: wp(94),
    alignSelf: "center",
    borderBottomLeftRadius: wp(6),
    borderBottomRightRadius: wp(6),
    // borderWidth: 1,
    flexDirection: "row",
  },
  timecontainer: {
    // backgroundColor: "green",
    height: hp(7),
    width: wp(47),
    borderBottomLeftRadius: wp(6),
    justifyContent: "center",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderColor: "#CFCFCF",
  },
  pricecontianer: {
    // backgroundColor: "pink",
    height: hp(7),
    width: wp(47),
    borderBottomRightRadius: wp(6),
    justifyContent: "center",
    borderTopWidth: 1,
    borderColor: "#CFCFCF",
  },
});
