import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import colors from '../../Assets/Colors/colors';
import {hp, wp} from '../../Utills/CommonMethods/CommonMethods';

export default function HeaderTab(props) {
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <HeaderButton
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
}

const HeaderButton = props => (
  <TouchableOpacity
    style={{
      backgroundColor:
        props.activeTab === props.text ? colors.DEEP_PURPLE : colors.WHITE,
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: hp(1),
      width: wp(40),
      height: hp(5),
      justifyContent: 'center',
    }}
    onPress={() => props.setActiveTab(props.text)}>
    <Text
      style={{
        color: props.activeTab === props.text ? 'white' : colors.BLACK,
        fontSize: 15,
        fontWeight: '900',
        textAlign: 'center',
      }}>
      {props.text}
    </Text>
  </TouchableOpacity>
);
