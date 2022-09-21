import React from "react";
import { View, Text } from "react-native";
import styles from "./Styles";
import colors from "../../../Assets/Colors/Colors";

const CustomIndicator = ({ lable, line, borderColor = colors.circle }) => {
  return (
    <View style={styles.container}>
      <View style={styles.stepContainer}>
        <View
          style={{
            flexDirection: "column",
          }}
        >
          <View
            style={[styles.circleContainer, { borderColor: borderColor }]}
          ></View>
          {line && <View style={styles.lineView}></View>}
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.lableText}>{lable}</Text>
        </View>
      </View>
      {/* lineView */}
    </View>
  );
};

export default CustomIndicator;
