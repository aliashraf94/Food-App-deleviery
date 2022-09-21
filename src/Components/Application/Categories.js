import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import colors from '../../Assets/Colors/colors';
import {hp, wp} from '../../Utills/CommonMethods/CommonMethods';

const items = [
  {
    image: require('../../Assets/Images/Png/shopping-bag.png'),
    text: 'Pick-up',
  },
  {
    image: require('../../Assets/Images/Png/soft-drink.png'),
    text: 'Soft Drinks',
  },
  {
    image: require('../../Assets/Images/Png/bread.png'),
    text: 'Bakery Items',
  },
  {
    image: require('../../Assets/Images/Png/fast-food.png'),
    text: 'Fast Foods',
  },
  {
    image: require('../../Assets/Images/Png/deals.png'),
    text: 'Deals',
  },
  {
    image: require('../../Assets/Images/Png/coffee.png'),
    text: 'Coffee & Tea',
  },
  {
    image: require('../../Assets/Images/Png/desserts.png'),
    text: 'Desserts',
  },
];

export default function Categories() {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: colors.DEEP_PURPLE,
        paddingVertical: 10,
        paddingLeft: 20,
        width: wp(95),
        borderRadius: hp(1),
      }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View
            key={index}
            style={{
              alignItems: 'center',
              marginRight: wp(7),
            }}>
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: 'contain',
              }}
            />
            <Text
              style={{fontSize: 13, fontWeight: '900', color: colors.WHITE}}>
              {item.text}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
