import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {hp, wp} from '../../../Utills/CommonMethods/CommonMethods';
import AppButton from '../../../Components/Common/AppButton';
import colors from '../../../Assets/Colors/colors';
import Images from '../../../Assets/Images';

const Splash = ({navigation}) => {
  return (
    <ImageBackground
      source={Images.backgroungImage}
      style={styles.imageStyle}
      resizeMode={'cover'}>
      <View style={styles.imageView}>
        <Image style={styles.logoTextView} source={Images.splashLogo} />
      </View>
      <View style={styles.ButtonView}>
        <AppButton
          onPress={() => {
            navigation.navigate('Login');
          }}
          title={'Get Started'}
          backgroundColor={colors.BLACK}
        />
      </View>
    </ImageBackground>
  );
};

export default Splash;

const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
    alignItems: 'center',
  },
  logoTextView: {
    height: hp('30'),
    width: hp('30'),
    resizeMode: 'contain',
  },
  imageView: {
    alignItems: 'center',
    flex: 0.7,
    justifyContent: 'center',
  },
  ButtonView: {
    alignItems: 'center',
    flex: 0.3,
    justifyContent: 'center',
  },
});
