import {StyleSheet, Dimensions, Platform} from 'react-native';
import {hp, wp} from '../../../Utills/CommonMethods/CommonMethods';
import colors from '../../../Assets/Colors/colors';
import fonts from '../../../Assets/Fonts/fonts';
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  imageStyle: {
    flex: 1,
    alignItems: 'center',
  },

  imageView: {
    alignItems: 'center',
    flex: 0.5,
    justifyContent: 'center',
  },
  bgVideo: {
    height: height,
    position: 'absolute',
    top: 0,
    left: 0,
    alignItems: 'stretch',
    bottom: 0,
    right: 0,
    // opacity: 0.5,
  },
  logoTextView: {
    height: hp('15%'),
    width: wp('60%'),
    resizeMode: 'contain',
  },
  splashTextView: {
    width: wp(60),
  },
  splashText: {
    color: colors.WHITE,
    fontSize: fonts.H7,
    textAlign: 'center',
  },
});
export default styles;
