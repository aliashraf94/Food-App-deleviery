import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  FlatList,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Images from "../../../Assets/Images";
import { hp, wp } from "../../../Utills/CommonMethods/CommonMethods";

const Subscriptioncard = ({
  packageheading,
  time,
  baserate,
  baserateprice,
  perdayrate,
  perdayrateprice,
  date,
}) => {
  return (
    <ImageBackground
      resizeMode={"stretch"}
      source={Images.Subscriptioncard}
      imageStyle={{
        height: hp(19),
        width: wp(95),
        borderRadius: hp(3),
      }}
    >
      <View style={styles.container}>
        <View style={styles.headingwrap}>
          <Text style={styles.headingstyle}>{packageheading}</Text>
          <Text style={{ alignSelf: "center" }}>{time}</Text>
        </View>
        <View style={styles.headingwrap}>
          <View style={{ width: wp(34), justifyContent: "center" }}>
            <Text style={{ fontWeight: "600" }}>{baserate}</Text>
          </View>
          <View style={{ width: wp(46), justifyContent: "center" }}>
            <Text>{baserateprice}</Text>
          </View>
        </View>
        <View style={styles.headingwrap}>
          <Text style={{ fontWeight: "600", alignSelf: "center" }}>
            {perdayrate}
          </Text>
          <Text style={{ alignSelf: "center" }}>{perdayrateprice}</Text>
          <Text style={{ alignSelf: "center" }}>{date}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};
export default Subscriptioncard;

const styles = StyleSheet.create({
  container: {
    height: hp(19),
    width: wp(95),
    justifyContent: "center",
    alignItems: "center",
  },
  headingwrap: {
    height: hp(4.5),
    width: wp(78),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headingstyle: {
    fontSize: hp(2),
    fontWeight: "600",
    alignSelf: "center",
  },
});
