import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import LottieView from "lottie-react-native";
import { hp, wp } from "../../../Utills/CommonMethods/CommonMethods";
import colors from "../../../Assets/Colors/Colors";
import Button from "../../../Components/Common/Button/Button";
const PackageCard = ({
  navigation,
  price,
  year,
  subheading1,
  cardContentData,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headingcontainer}>
        <View style={{ flexDirection: "row", alignSelf: "center" }}>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.year}>{year}</Text>
        </View>
        <Text style={styles.subheading1}>{subheading1}</Text>
      </View>

      <View style={styles.descriptioncontainer}>
        {cardContentData.map((data) => (
          <View key={data.key} style={{ flexDirection: "row" }}>
            <LottieView
              source={data.source}
              style={{
                height: hp(4),
                width: hp(4),
              }}
              autoPlay={true}
              loop
            />
            <View style={styles.textcontainer}>
              <Text style={styles.heading}>
                {data.heading}{" "}
                <Text style={styles.subheading}>{data.subheading}</Text>
              </Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.buttoncontainer}>
        <Button
          title={"Buy"}
          bgColor={colors.primaryColor}
          color={colors.primaryColor}
          borderRadius={hp(1.5)}
          height={hp(5)}
          width={wp(50)}
          titleColor={colors.WHITE}
          // onPress={() => navigation.navigate("History")}
        />
      </View>
    </View>
  );
};
export default PackageCard;
